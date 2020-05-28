import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar, 
} from 'react-native';

//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../../../assets/images/icon.png';

//componentes e telas
import Home from '../Home';
import Category from '../../components/Category';
import AddModal from '../AddModal';

export default class Main extends Component {
    state = {
        showHome: true,
        categories: [
            {
                id: Math.random(),
                title: 'Comida',
                items: [
                    {
                        id: Math.random(),
                        isChecked: true,
                        desc: 'Item 23'
                    },
                    {
                        id: Math.random(),
                        isChecked: false,
                        desc: 'Item 2'
                    },
                ]
            },
            {
                id: Math.random(),
                title: 'Roupas',
                items: []
            },
            {
                id: Math.random(),
                title: 'Cozinha',
                items: [
                    {
                        id: Math.random(),
                        isChecked: true,
                        desc: 'BUJÃO DE GÁS CROMADO'
                    },
                    {
                        id: Math.random(),
                        isChecked: false,
                        desc: 'Item 2'
                    },
                ],
            },
            {
                id: Math.random(),
                title: 'Cozinha',
                items: [
                    {
                        id: Math.random(),
                        isChecked: true,
                        desc: 'BUJÃO DE GÁS CROMADO'
                    },
                    
                ],
            },
        ],
        addModalProps: {
            visible: false,
        }
    };

    componentDidMount = () => {
        this.setState({ showHome: !this.state.categories.length > 0 });
    };
    //Funções Add Modal 
    visibilityAddModal = visibility => {
        const addModalProps = { ...this.state.addModalProps };
        addModalProps.visible = visibility;
        this.setState({ addModalProps });
        console.log('ok')
    };

    //Funções Categoria
    onDeleteCategory = category_id => {
        const categories = [ ...this.state.categories ]
            .filter( category => category.id != category_id );
        this.setState({ categories });

    };
    
    //Funções Item
    onToggleCheckItem = ( category_id, item_id ) => {
        const categories = [ ...this.state.categories ];
        categories.forEach( category => {
            if( category.id === category_id ){
                const items = category.items;
                items.forEach( item => {
                    if(item.id === item_id) {
                        item.isChecked = !item.isChecked;
                    }
                });
            }
        });
        this.setState({ categories });
    };
    onDeleteItem = ( category_id, item_id ) => {
        const categories = [ ...this.state.categories ];
        categories.forEach( category => {
            if( category.id === category_id ){
                const items = category.items
                    .filter( item => item.id !== item_id );
                category.items = items;
            }
        });
        this.setState({ categories });
    };

    render(){
        return (
            <View style = { styles.container }>
                <StatusBar backgroundColor = { commonStyles.colors.primary }/>
                <Home isVisible = { this.state.showHome } 
                    onCancel = { () => this.setState({ showHome: false }) }/>
                
                <View style = { styles.navBar }>
                    <View style = { styles.navLeft}>
                        <Image source = { logoImg } style = { styles.navLogo } />
                        <Text style = { styles.navTitle }>Sua Lista</Text>
                    </View>
                    <TouchableOpacity style = { styles.navDelete }>
                        <Icon name='trash' size = {30} 
                            color = { commonStyles.colors.secondary } />
                    </TouchableOpacity>
                </View>

                <View style = { styles.categoryList }>
                    {this.state.categories.length === 0 ? 
                        // Indica onde começar, caso não tenha itens
                        <View style = { styles.indicateAddCategory }>
                            <Icon name = 'arrow-down' size = {80}
                            color = {commonStyles.colors.secondaryDark}/>
                        </View> : 
                        <FlatList
                            data = { this.state.categories }
                            keyExtractor = { category => `${category.id}` }
                            renderItem = {(category) => {
                                const isFirst = category.index === 0;
                                return (
                                    <Category { ...category.item } first = { isFirst } 
                                        onToggleCheckItem = { this.onToggleCheckItem }
                                        onDeleteItem = { this.onDeleteItem }
                                        onDeleteCategory = { this.onDeleteCategory }/>             
                                );
                            }}/>
                    }
                </View>

                <AddModal onCancel = { () => this.visibilityAddModal(false) } 
                    isVisible = { this.state.addModalProps.visible }/>

                <TouchableOpacity style = { styles.buttonAddCategory }
                    activeOpacity = {0.8}
                    onPress = { () => this.visibilityAddModal(true) }>
                    <Icon name = 'plus' size = {35} 
                        color = { commonStyles.colors.secondary }/>
                    <Text style = { styles.labelAddCategory }>
                        Nova categoria</Text>
                </TouchableOpacity>
            </View>
        );
    }
};