import { Space, Table, Tag, Button, Modal, Form, Input } from 'antd';
import PrimaryLayout from 'Componets/Layout';
import React, { useState } from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href='/user'>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a href='/user'>Invite {record.name}</a>
                <a href='./user'>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const SubmitButton = () => {
    //     const [submittable, setSubmittable] = useState(false);

    //     // Watch all values
    //     const values = Form.useWatch([], form);
    //     useEffect(() => {
    //         form.validateFields({
    //                 validateOnly: true,
    //             })
    //             .then(
    //                 () => {
    //                     setSubmittable(true);
    //                 },
    //                 () => {
    //                     setSubmittable(false);
    //                 },
    //             );
    //     }, [values]);


    return (
        <Button type="primary" htmlType="submit" >

            Add
        </Button>
    );
};






const UserManagament = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [form] = Form.useForm();

    const [users, SetUsers] = useState(data);

    const onFinish = (user) => {
        const newUser = {
            key: Math.floor(Math.random() * 10000) + 1,
            name: user.name,
            age: user.age,
            address: user.address,
            tags: ['nice', 'developer'],
        };
        SetUsers([...users, newUser]);

    }





    return (

        <PrimaryLayout title={"UserList"}>


            <Button type="primary" onClick={showModal}>
                Add User
            </Button>
            <Modal footer={null} title="Add user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish} >



                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <SubmitButton form={form} />
                            <Button htmlType="reset">Reset</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            <Table columns={columns} dataSource={users} />
            {/* {console.log(users)}; */}

        </PrimaryLayout>


    )
}
export default UserManagament;