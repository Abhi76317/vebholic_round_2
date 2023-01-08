import React, { useState, useEffect } from 'react';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = ({ product, setProduct }) => {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({
        quantity: null,
        price: null,
        discount: null,
        tax: null
    })
    const [total_price, set_total_price] = useState(0)

    useEffect(() => {
        const item = product.filter(ele => ele.id == params.id)
        setData({
            quantity: parseInt(item[0].quantity),
            price: parseFloat(item[0].price),
            discount: parseFloat(item[0].discount),
            tax: parseFloat(item[0].tax)
        })
        set_total_price(parseFloat(item[0].total_price))
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return (
                {
                    ...preVal, [name]: value
                }
            )
        })
    }

    useEffect(() => {
        const total = ((data.quantity * data.price) - ((data.quantity * data.price) * data.discount / 100)) + ((data.quantity * data.price) * data.tax / 100)
        set_total_price(total)

    }, [data]);

    const handleSubmit = () => {
        const index = product.findIndex(ele => ele.id == params.id)
        product[index].quantity = data.quantity;
        product[index].price = data.price;
        product[index].discount = data.discount;
        product[index].tax = data.tax;
        product[index].total_price = total_price;
        navigate('/product')
    }

    return (
        <div style={{ width: '50%' }}>
            <CustomInput label={"Enter Quantity"} onChange={handleChange} name={"quantity"} value={data.quantity} />
            <CustomInput label={"Enter price"} onChange={handleChange} name={"price"} value={data.price} />
            <CustomInput label={"Enter discount %"} onChange={handleChange} name={"discount"} value={data.discount} />
            <CustomInput label={"Enter tax %"} onChange={handleChange} name={"tax"} value={data.tax} />
            <CustomInput label={"total price"} value={total_price} disabled={true} />
            <CustomButton label={"save"} onClick={handleSubmit} />
        </div>
    );
}

export default EditProduct;
