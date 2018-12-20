import React, { Component } from 'react';
import idb from 'idb';

import Form from './Form/Form';

class FormsList extends Component {
    state = {
        forms: null
    }

    componentDidMount(){
        async function getAllData() {
           
            let db = await idb.open('db-FormBuilder', 2)

            if(db.objectStoreNames.contains('Forms')){
                let tx = db.transaction('Forms', 'readonly')
                let store = tx.objectStore('Forms')
            
                let allSavedItems = await store.getAll()
            
                db.close()

                return allSavedItems
            } 
            db.close();    
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
            elements = this.state.forms.map((el,index) => <Form key={index} data={el} />);
        }
        return (
            <div>
                <h3>Your Forms</h3>
                {elements}
            </div>
        )
    }
}

export default FormsList;