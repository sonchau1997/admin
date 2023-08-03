import { Space, Table, Tag, Button, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PrimaryLayout from 'components/Layout';
import Excel from 'components/Excel';
const MotelManagament = () => {
    <PrimaryLayout></PrimaryLayout>
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href='/motel'>{text}</a>,
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
                            onEditmotel(record);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            onDeletemotel(record);
                        }}
                    />
                </Space>
            ),
        },
    ];
    const motelsStore = useSelector((state) => state.motels);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingmotel, setEditingmotel] = useState(null);
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
    const onFinish = (motel) => {
        const newmotel =[...motelsStore.listmotel, {
            key: Math.floor(Math.random() * 100) + 1,
            name: motel.name,
            age: motel.age,
            address: motel.address,
            tags: ['nice', 'developer'],
        }];
        dispatch.motels.setListmotel(newmotel);
       
    }
    const onDeletemotel = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this motel record?",
            okText: "Yes",
            okType: "danger",
            onOk:()=> {
                const deletemotel=motelsStore.listmotel.filter(
                    (motel)=>motel.key!==record.key
                );
                dispatch.motels.setListmotel(deletemotel)
              
            },
        });
    
    };
    const onEditmotel = (record) => {
        setIsEditing(true);
        setEditingmotel({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingmotel(null);
    };

    return (
       <>
       <Button type="primary" onClick={showModal} >
                Add motel
            </Button>
            <Excel
          fileName="export-motel"
          data={[
            {
              columns: [
                {
                  title: "motel Id",
                  dataIndex: "key",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "name",
                  width: 20,
                },
                {
                  title: "Age",
                  dataIndex: "age",
                  width: 5,
                },
              ],
              data: motelsStore.listmotel,
              tabName: "info",
            }
            // {
            //   columns: [
            //     {
            //       title: "Name",
            //       dataIndex: "motelname",
            //       width: 30,
            //     },
            //     {
            //       title: "Phone",
            //       dataIndex: "phone",
            //       width: 30,
            //     },
            //   ],
            //   data: motelsStore.listmotel,
            //   tabName: "contact",
            // },
          ]}
        >
          <Button>Export motels</Button>
        </Excel>
            <Modal footer={null} title="Add motel" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
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

            <Table columns={columns} dataSource={motelsStore.listmotel} />
            <Modal
                title="Edit motel"
                open={isEditing}
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    const updatemotel=motelsStore.listmotel.map(
                        (motel)=>{
                            if(motel.key===editingmotel.key){
                                return editingmotel;
                            }else{
                                return motel;
                            }
                        }
                    );
                    dispatch.motels.setListmotel(updatemotel)
                    resetEditing();
                }}

            >
                <Input
                    value={editingmotel?.name}
                    onChange={(e) => {
                        setEditingmotel((pre) => {
                            return { ...pre, name: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingmotel?.age}
                    onChange={(e) => {
                        setEditingmotel((pre) => {
                            return { ...pre, age: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingmotel?.address}
                    onChange={(e) => {
                        setEditingmotel((pre) => {
                            return { ...pre, address: e.target.value };
                        });
                    }}
                />

            </Modal>



        



       </>
            
    


    )
}
export default MotelManagament;