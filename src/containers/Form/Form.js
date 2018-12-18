import React, { Component } from 'react';
import idb from 'idb';

class Form extends Component {
    state = {
        forms: null
    }

    componentDidMount(){
        async function getAllData() {
            let db = await idb.open('db-name', 1)
        
            let tx = db.transaction('objectStoreName', 'readonly')
            let store = tx.objectStore('objectStoreName')
        
            // add, clear, count, delete, get, getAll, getAllKeys, getKey, put
            let allSavedItems = await store.getAll()
        
            db.close()

            return allSavedItems
        }

        getAllData()
            .then(result => {
                this.setState({
                    forms: result
                })
            });
    }

    render(){
        let elements = null;
        if(this.state.forms){
            elements = this.state.forms.map(el => <h4>Jeden form</h4>);
        }
        return (
            <div>
                <h1>Zajebisty Form</h1>
                {elements}
            </div>
        )
    }
}

export default Form;