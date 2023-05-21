import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const MyToy = ({toy}) => {
    const {_id, sellerName, toyName, category, price, quantity} = toy;
    return (
              <tbody key={toy._id}>
                <tr>
                  <td>{sellerName}</td>
                  <td>{toyName}</td>
                  <td>{category}</td>
                  <td>$ {price}</td>
                  <td>{quantity}</td>
                 <div className="space-x-4 mt-3">
                 <Link to={`/toys/${toy._id}`}>
                    <button className="p-1 rounded-md hover:btn-success"><FcViewDetails/></button>
                  </Link>
                  <button className="p-1 rounded-md hover:btn-accent"><GrUpdate/></button>
                  <button className="p-1 rounded-md hover:btn-error"><AiFillDelete/></button>
                 </div>
                </tr>
              </tbody>
            );
};

export default MyToy;