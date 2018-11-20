import React, { Component } from 'react';
import axios                from 'axios';
import { Table, Divider, Modal, Button, Input} from 'antd';
const confirm = Modal.confirm;

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            publisher_id: '',
            price: '',
            visible: false,
        };
    }

    componentWillMount() {
        axios.get('http://localhost:3003/show').then(res => {
            const data = res.data;
            this.setState({data})
        });
    }

    showModal = (data) => {
      this.setState({visible: true, id: data.id, title: data.title, publisher_id: data.publisher_id, price: data.price});
    };

    handleOk = () => {
        let self =this;
      this.setState({visible:false,});
        axios.put(`http://localhost:3003/update/${this.state.id}`, this.state)
            .then(res => {
                self.componentWillMount();
                console.log(res.data)
            })
    };

    handleCancel = (e) => {
      this.setState({visible: false,})
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    showDeleteConfirm = (data) => {
        let self = this;
        confirm({
            title: 'Are you sure delete this book?',
            content: 'Somethings',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(`http://localhost:3003/delete/${data.id}`).then(() => self.componentWillMount())
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    showConfirm = () => {
        let self = this;
        confirm({
            title: 'create books',
            content: (
            <div>
                <label>Title</label>
                <Input name='title' type="text" onChange={this.onChange}/>
                <label>Publisher_id</label>
                <Input name='publisher_id' type="number" onChange={this.onChange}/>
                <label>price</label>
                <Input name='price' type="number" onChange={this.onChange}/>
            </div>
            ),
            onOk() {
                axios.post(`http://localhost:3003/create`, self.state).then(() => self.componentWillMount())
            },
            onCancel() {
                console.log('cancel');
            }
        })
    };

    render() {
        const {title, publisher_id, price} = this.state;
        return (
        <div>
            <Button type="primary" onClick={this.showConfirm}>Create Book</Button>

            <Table dataSource={this.state.data} >
                <column title = 'title'
                dataIndex = 'title'
                key = 'title' />
                <column title = 'publisher_id'
                dataIndex = 'publisher_id'
                key = 'publisher_id' />
                <column title = 'price'
                dataIndex = 'price'
                key = 'price' />
                <column title = 'Action'
                key = 'action'
                render = { (data) => (
                <span>
                    <Button type="primary" onClick={() => this.showModal(data)}>
                        Edit
                    </Button>
                    <Modal
                        title="Edit Books"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <label>Title</label>
                        <Input name='title' value={title} type="text" onChange={this.onChange}/>
                        <label>Publisher_id</label>
                        <Input name='publisher_id' value={publisher_id} type="number" onChange={this.onChange}/>
                        <label>price</label>
                        <Input name='price' value={price} type="number" onChange={this.onChange}/>
                    </Modal>
                    <Divider type="vertical" />
                    <Button onClick={() => this.showDeleteConfirm(data)} type="danger">Delete</Button>
                </span>
                )} />
            </Table>
        </div>
        );
    }
}