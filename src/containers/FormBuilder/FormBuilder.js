import React, { Component } from 'react';
import idb from 'idb';

import QuestionInput from '../QuestinInput/QuestionInput';

class FormBuilder extends Component {
    state = {
        form: []
    }

    componentDidMount(){
        async function putSomeData() {
            let db = await idb.open('db-name', 1, upgradeDB => upgradeDB.createObjectStore('objectStoreName', { autoIncrement: true }))
        
            let tx = db.transaction('objectStoreName', 'readwrite')
            let store = tx.objectStore('objectStoreName')
        
            await store.put({ firstname: 'John', lastname: 'Doe', age: 33 })
            await store.put({ firstname: 'John2', lastname: 'Doe', age: 335 })
        
            await tx.complete
            db.close()
        }
        putSomeData();
    }

    handleAddInput = () => {
        const newState = this.state.form.map(item => item);
        newState.push([]);
        this.setState({
            form: newState
        })
    }

    handleDelete = (index) => {
        const newState = this.state.form.map(item => item);
        newState.splice(index, 1);
        this.setState({
            form: newState
        })
    }

    render(){
        return (
            <div>
                {this.state.form.map((form,index) => 
                    <QuestionInput key={index} handleDelete={() => this.handleDelete(index)} />)}
                <button onClick={this.handleAddInput}>Add Input</button>
            </div>
        )
    }
}

export default FormBuilder;