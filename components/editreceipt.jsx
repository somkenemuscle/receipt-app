"use client"
import Styles from '../styles/page.css';
import { useState, useContext } from 'react';
import { AppContext } from "@/context/data";
import { EditReceiptContext } from "@/context/edit";
import { DisplayReceiptContext } from '@/context/display';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EditReceipt = () => {
  const router = useRouter();
  const [editReceipt, setEditReceipt] = useContext(EditReceiptContext);
  const [DisplayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext);
  const [receipts, setReceipts] = useContext(AppContext);

  const [edit, setEdit] = useState({
    id: editReceipt.id,
    name: editReceipt.name,
    shop: editReceipt.shop,
    quantity: editReceipt.quantity,
    date: editReceipt.date,
    price: editReceipt.price,
    category: editReceipt.category
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEdit((prevReceipt) => ({
      ...prevReceipt,
      id: editReceipt.id,
      [name]: value
    }));
    setEditReceipt((prevReceipt) => ({
      ...prevReceipt,
      id: editReceipt.id,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    const elementsIndex = receipts.findIndex((element) => element.id == edit.id);
    let newDisplay = [...receipts];
    newDisplay[elementsIndex] = {
      ...edit
    };
    setReceipts(newDisplay);

    // For displaying receipt
    const displayElementsIndex = DisplayReceipts.findIndex((element) => element.id == edit.id);
    let newElementDisplay = [...DisplayReceipts];
    newElementDisplay[displayElementsIndex] = {
      ...edit
    };
    setDisplayReceipts(newElementDisplay);

    router.push('/receipts');
    e.preventDefault();
  }

  return (
    <div className="addform-container">
      <h3 className="r-head">EDIT RECEIPT</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="r-label">Shop</label>
          <input onChange={handleChange} name="shop" className="r-input" value={edit.shop} type="text" placeholder="Shop Name" required />
        </div>
        <div>
          <label className="r-label">Item</label>
          <input onChange={handleChange} name="name" className="r-input" value={edit.name} type="text" placeholder="Product Name" required />
        </div>
        <label className="r-label">Quantity</label>
        <input onChange={handleChange} name="quantity" className="r-input" value={edit.quantity} type="number" placeholder="Quantity" min="1" required />
        <div>
          <label className="r-label">Date Of Purchase</label>
          <input onChange={handleChange} name="date" className="r-input" value={edit.date} type="date" placeholder="Select Date" required />
        </div>
        <div>
          <label className="r-label">Price</label>
          <input onChange={handleChange} name="price" className="r-input" value={edit.price} type="number" placeholder="$ Price" required />
        </div>
        <div>
          <label className="r-label">Select Category</label>
          <select onChange={handleChange} className="r-category" name="category" defaultValue={'Select'} required>
            <option value="Select" disabled>Choose Category...</option>
            <option value="grocery">Groceries</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="travel">Travel</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
  <button className="r-btn">Submit</button>
  <Link href="/receipts">
    <button className="r-btn" style={{ marginLeft: '10px' }}>Close</button>
  </Link>
</div>

      </form>
    </div>
  );
}

export default EditReceipt;
