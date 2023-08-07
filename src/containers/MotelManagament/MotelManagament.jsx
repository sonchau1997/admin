import { Space, Table, Tag, Button, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined,DollarOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PrimaryLayout from 'components/Layout';
import Excel from 'components/Excel';
const MotelManagament = () => {
    <PrimaryLayout></PrimaryLayout>
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href='/motel'>{text}</a>,
        },
        {
            title: 'Ngày vào',
            dataIndex: 'dayIn',
            key: 'dayIn',
        },
        {
            title: 'Tiền cọc',
            dataIndex: 'deposit',
            key: 'deposit',
        },
        {
            title: 'Chỉ số điện mới',
            dataIndex: 'csdm',
            key: 'csdm',
        },
        {
            title: 'Chỉ số điện cũ',
            key: 'csdc',
            dataIndex: 'csdc',
           
        },
        {
            title: 'Giá điện',
            key: 'priceE',
            dataIndex: 'priceE',
           
        },
        {
            title: 'Chỉ số nước mới',
            key: 'csnm',
            dataIndex: 'csnm',
           
        },
        {
            title: 'Chỉ số nước cũ',
            key: 'csnc',
            dataIndex: 'csnc',
           
        },
        {
            title: 'Giá nước',
            key: 'priceW',
            dataIndex: 'priceW',
           
        },
        {
            title: 'Tiền rác',
            key: 'junk',
            dataIndex: 'junk',
           
        },
        {
            title: 'Tổng tiền',
            key: 'total',
            dataIndex: 'total',
           
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
                    <DollarOutlined />
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
            dayIn: motel.dayIn,
            deposit:motel.deposit,
            csdm:motel.csdm,
            csdc: parseFloat(motel.csdc),
            csnm:parseFloat(motel.csdm),
            csnc:parseFloat(motel.csnc),
            junk:parseFloat(motel.junk),
            priceE:parseFloat(motel.priceE),
            priceW:parseFloat(motel.priceW),
            total:(parseFloat(motel.csdm)-parseFloat(motel.csdc))*parseFloat(motel.priceE)+(parseFloat(motel.csnm)-parseFloat(motel.csnc))*parseFloat(motel.priceW)+parseFloat(motel.junk)+1000,
           
          
            
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
                        label="Tên phòng"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="dayIn"
                        label="Ngày vào"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="deposit"
                        label="Tiền cọc"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="csdm"
                        label="Chỉ số điện mới"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="csdc"
                        label="Chỉ số điện cũ"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="priceE"
                        label="Giá Điện"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="csnm"
                        label="Chỉ số nước mới"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="csnc"
                        label="Chỉ số nước cũ"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="priceW"
                        label="Giá nước"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="junk"
                        label="Tiền rác"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* <Form.Item
                        name="total"
                        label="Tổng tiền"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item> */}
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