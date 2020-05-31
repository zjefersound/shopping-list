import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar, 
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../../../assets/images/icon.png';

//componentes e telas
import Home from '../Home';
import Category from '../../components/Category';
import AddModal from '../AddModal';
import AlertModal from '../AlertModal';

const initialState = {
    showHome: true,
    categories: [],
    addModalProps: {
        visible: false,
        onSave: null
    },
    alertModalProps: {
        visible: false,
        onConfirm: null
    }
};
export default class List extends Component {
    state = {
        ...initialState
    };

    componentDidMount = async () => {
        this.setState({ showHome: !this.state.categories.length > 0 });
        const stateString = await AsyncStorage.getItem('shoplistState');
        const state = JSON.parse(stateString) || initialState;
        this.setState(state, this.updateStorage );
    };

    //Funções Async Storage 
    updateStorage = () => {
        AsyncStorage.setItem('shoplistState', JSON.stringify( this.state ));
    };
    //Funções Add Modal 
    visibilityAddModal = visibility => {
        const addModalProps = { ...this.state.addModalProps };
        addModalProps.visible = visibility;
        this.setState({ addModalProps });
    };
    
    //Funções Categoria
    openAddCategory = () => {
        const addModalProps = this.state.addModalProps;
        addModalProps.title = 'Nova categoria';
        addModalProps.placeholder = 'Ex: Roupas, Bebidas';
        addModalProps.onSave = this.onCreateCategory;
        this.setState({ addModalProps });
        this.visibilityAddModal(true);
    };
    openUpdateCategory = (category_id, value) => {
        const addModalProps = this.state.addModalProps;
        addModalProps.title = 'Atualizar categoria';
        addModalProps.placeholder = `Título atual: ${value}` ;
        addModalProps.category_id = category_id;
        addModalProps.onSave = this.onUpdateCategory;
        this.setState({ addModalProps });
        this.visibilityAddModal(true);
    };
    onCreateCategory = value => {
        const categories = [ ...this.state.categories ];
        const newCategory = {
            id: Math.random(),
            title: value,
            items: []
        };
        categories.push(newCategory);
        this.setState({ categories }, this.updateStorage);
    };
    onUpdateCategory = ( value, category_id ) => {
        const categories = [ ...this.state.categories ];
        categories.forEach( category => {
            if( category.id === category_id ) {
                category.title = value;
            }
        });
        this.setState({ categories }, this.updateStorage);
    };
    onDeleteCategory = category_id => {
        const categories = [ ...this.state.categories ]
            .filter( category => category.id != category_id );
        this.setState({ categories }, this.updateStorage);
    };

    renderCategories = category => {
        const isFirst = category.index === 0;
        return (
            <Category { ...category.item } first = { isFirst } 
                onToggleCheckItem = { this.onToggleCheckItem }
                onDeleteItem = { this.onDeleteItem }
                onAddItem = { this.openAddItem }
                onUpdateCategory = { this.openUpdateCategory }
                onDeleteCategory = { this.onDeleteCategory }/>             
        );
    };
    
    //Funções Item
    openAddItem = category_id => {
        const addModalProps = this.state.addModalProps;
        addModalProps.title = 'Novo item';
        addModalProps.placeholder = 'Ex: 3kg Feijão';
        addModalProps.onSave = this.onCreateItem;
        addModalProps.category_id = `${category_id}`;
        this.setState({ addModalProps });
        this.visibilityAddModal(true);
    };
    onCreateItem = ( value, category_id ) => {
        const categories = [ ...this.state.categories ];
        const newItem = {
            id: Math.random(),
            isChecked: false,
            desc: value
        };
        categories.forEach( category => {
            if( category.id == category_id){
                category.items.push(newItem);
            }
        });
        this.setState({ categories }, this.updateStorage);
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
        this.setState({ categories }, this.updateStorage);
    };
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
        this.setState({ categories }, this.updateStorage);
    };

    //Função clear all
    onClearAll = () => {
        this.setState({ ...initialState }, this.updateStorage);
    };
    //Funções Alert Modal 
    openAlertClearAll = () => {
        const alertModalProps = this.state.alertModalProps;
        alertModalProps.title = 'Limpar lista';
        alertModalProps.description = 'Deseja excluir toda sua lista?';
        alertModalProps.onConfirm = () => this.onClearAll();
        console.log(alertModalProps);
        this.setState({ alertModalProps });
        this.visibilityAlertModal(true);
    };
    visibilityAlertModal = visibility => {
        const alertModalProps = { ...this.state.alertModalProps };
        alertModalProps.visible = visibility;
        this.setState({ alertModalProps });
    };

    render(){
        return (
            
            <View style = { styles.container }>
                <StatusBar backgroundColor = { commonStyles.colors.primary }/>
                <Home isVisible = { this.state.showHome } 
                    onCancel = { () => this.setState({ showHome: false }) }/>
                <AlertModal
                    isVisible = { this.state.alertModalProps.visible } 
                    title = { this.state.alertModalProps.title }
                    description = { this.state.alertModalProps.description }
                    onCancel = { () => this.visibilityAlertModal(false) }
                    onConfirm = { this.state.alertModalProps.onConfirm } />
                <View style = { styles.navBar }>
                    <View style = { styles.navLeft}>
                        <Image source = { logoImg } style = { styles.navLogo } />
                        <Text style = { styles.navTitle }>Sua Lista</Text>
                    </View>
                    <TouchableOpacity style = { styles.navDelete }
                        onPress = { this.openAlertClearAll }>
                        <Icon name='trash' size = {30} 
                            color = { commonStyles.colors.secondary } />
                    </TouchableOpacity>
                </View>

                <View style = { styles.categoryList }>
                    {this.state.categories.length === 0 ? 
                        // Indica onde começar, caso não tenha itens
                        <View style = { styles.indicateAddCategory }>
                            <Text style = { styles.indicateAddCategoryText }>
                                Comece adicionando uma categoria
                            </Text>
                            <Icon name = 'arrow-down' size = {80}
                            color = {commonStyles.colors.secondaryDark}/>
                        </View> : 
                        <FlatList
                            data = { this.state.categories }
                            keyExtractor = { category => `${category.id}` }
                            renderItem = { this.renderCategories }/>
                    }
                </View>

                <AddModal onCancel = { () => this.visibilityAddModal(false) }
                    title = { this.state.addModalProps.title } 
                    placeholder = { this.state.addModalProps.placeholder }
                    category_id = { this.state.addModalProps.category_id }
                    onChangeText = { this.onSetValue }
                    onSave = { this.state.addModalProps.onSave }
                    isVisible = { this.state.addModalProps.visible }/>

                <TouchableOpacity style = { styles.buttonAddCategory }
                    activeOpacity = {0.8}
                    onPress = { this.openAddCategory }>
                    <Icon name = 'plus' size = {25} 
                        color = { commonStyles.colors.secondary }/>
                    <Text style = { styles.labelAddCategory }>
                        Nova categoria</Text>
                </TouchableOpacity>
            </View>
        );
    }
};