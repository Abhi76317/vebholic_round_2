import React, { useState, useEffect } from 'react';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { useNavigate } from 'react-router-dom';

const Product = ({product, setProduct}) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        quantity: null,
        price: null,
        discount: null,
        tax: null
    })
    const [total_price, set_total_price] = useState(0)

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
        const obj = {
            id: Date.now(),
            quantity: data.quantity,
            price: data.price,
            discount: data.discount,
            tax: data.tax,
            total_price
        }
        setProduct([...product, obj])
        navigate('/product')
    }

    return (
        <div style={{ width: '50%' }}>
            <CustomInput label={"Enter Quantity"} onChange={handleChange} name={"quantity"} value={data.quantity} />
            <CustomInput label={"Enter price"} onChange={handleChange} name={"price"} value={data.price} />
            <CustomInput label={"Enter discount %"} onChange={handleChange} name={"discount"} value={data.discount} />
            <CustomInput label={"Enter tax %"} onChange={handleChange} name={"tax"} value={data.tax} />
            <CustomInput label={"total price"} value={total_price} disabled={true} />
            <CustomButton label={"submit"} onClick={handleSubmit} />
        </div>
    );
}

export default Product;
