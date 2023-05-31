import { Space, Table, Tag, Button, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PrimaryLayout from 'Componets/Layout';
import React, { useState } from 'react';
const UserManagament = () => {
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
                    <EditOutlined
                        onClick={() => {
                            onEditUser(record);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            onDeleteUser(record);
                        }}
                    />
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
    const [users, setUsers] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
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
    const onFinish = (user) => {
        const newUser = {
            key: Math.floor(Math.random() * 10000) + 1,
            name: user.name,
            age: user.age,
            address: user.address,
            tags: ['nice', 'developer'],
        };
        setUsers([...users, newUser]);
    }
    const onDeleteUser = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setUsers((prevUser) => {
                    return prevUser.filter((user) => user.key !== record.key);
                });
            },
        });
    };
    const onEditUser = (record) => {
        setIsEditing(true);
        setEditingUser({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingUser(null);
    };

    return (
        <PrimaryLayout title={"UserList"}>
            <Button type="primary" onClick={showModal}>
                Add User
            </Button>
            <Modal footer={null} title="Add user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}  >
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
                            <Button onClick={handleOk} type="primary" htmlType="submit">
                                Add
                            </Button>
                            <Button htmlType="reset">Reset</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            <Table columns={columns} dataSource={users} />
            <Modal
                title="Edit User"
                open={isEditing}
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    setUsers((prevUser) =>
                        prevUser.map((user) => {
                            if (user.key === editingUser.key) {
                                return editingUser;
                            } else {
                                return user;
                            }
                        })
                    );
                    resetEditing();
                }}
            >
                <Input
                    value={editingUser?.name}
                    onChange={(e) => {
                        setEditingUser((pre) => {
                            return { ...pre, name: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingUser?.age}
                    onChange={(e) => {
                        setEditingUser((pre) => {
                            return { ...pre, age: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingUser?.address}
                    onChange={(e) => {
                        setEditingUser((pre) => {
                            return { ...pre, address: e.target.value };
                        });
                    }}
                />

            </Modal>




            {console.log(users)};



        </PrimaryLayout>


    )
}
export default UserManagament;