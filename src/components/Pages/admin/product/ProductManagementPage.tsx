
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { IProduct } from '../../../../interfaces/product';
// import ImageList from '../../../Common/product';
import { ICategory } from '../../../../interfaces/category';
import HandleCateId from '../../../Common/HandleCateId';

interface DataType {
    key: string | number;
    _id: string;
    name: string;
    description: string;
    price: number,
    categoryId: ICategory[]

}
interface IProps {
    categories: ICategory[],
    products: IProduct[],
    onHandleRemove: (id: string) => void
}
const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: string) => props.onHandleRemove(id)
console.log(props.categories);
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={`/products/${record._id}`} >{text}</Link>,
        },        
        {
            title: 'Product price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product description',
            dataIndex: 'description',
            key: 'description',
        },

        // {
        //     title: 'Product Image',
        //     dataIndex: 'images',
        //     key: 'image',
        //     render: (text) => <ImageList images={text || [""]} />
        // },
        {
            title: 'Product Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
            render: (text) => <HandleCateId categories={props.categories} cates={text}/>


        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>Remove</Button>
                    <Button style={{ backgroundColor: 'darkblue' }} type="primary" ><Link to={`/admin/products/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item._id,
            ...item

        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage