import { Space, Table, Button, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PrimaryLayout from 'components/Layout';

const ProductManagament = () => {
    <PrimaryLayout></PrimaryLayout>
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a href='/product'>{text}</a>,

        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Thumbnail',
            key: 'thumbnail',
            dataIndex: 'thumbnail',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined
                        onClick={() => {
                            onEditProduct(record);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            onDeleteProduct(record);
                        }}
                    />
                </Space>
            ),
        },
    ];
    const productsStore = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
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
    useEffect(() => {
        dispatch.products.fetchProducts();
    }, [dispatch.products]);

    const onFinish = (product) => {
        const newProduct = [...productsStore.listProduct, {
            id: Math.floor(Math.random() * 100) + 1,
            name: product.title,
            age: product.description,
            address: product.price,
            thumbnail: product.thumbnail,
        }];
        dispatch.products.setListProudct(newProduct);

    }
    const onDeleteProduct = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this procut record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                const deleteProduct = productsStore.listProduct.filter(
                    (product) => product.id !== record.id
                );
                dispatch.products.setListProduct(deleteProduct)

            },
        });

    };
    const onEditProduct = (record) => {
        setIsEditing(true);
        setEditingProduct({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} >
                Add product
            </Button>

            <Modal footer={null} title="Add product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}  >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Price"
                        label="Price"
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

            <Table columns={columns} dataSource={productsStore.listProduct} />
            <Modal
                title="Edit Product"
                open={isEditing}
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    const updateProduct = productsStore.listProduct.map(
                        (product) => {
                            if (product.id === editingProduct.id) {
                                return editingProduct;
                            } else {
                                return product;
                            }
                        }
                    );
                    dispatch.products.setListProduct(updateProduct)
                    resetEditing();
                }}

            >
                <Input
                    value={editingProduct?.title}
                    onChange={(e) => {
                        setEditingProduct((pre) => {
                            return { ...pre, name: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingProduct?.description}
                    onChange={(e) => {
                        setEditingProduct((pre) => {
                            return { ...pre, age: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingProduct?.price}
                    onChange={(e) => {
                        setEditingProduct((pre) => {
                            return { ...pre, address: e.target.value };
                        });
                    }}
                />

            </Modal>



            {console.log(productsStore.listProduct)}



        </>




    )
}
export default ProductManagament;