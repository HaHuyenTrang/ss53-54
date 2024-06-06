
import CartItem from "./assets/components/bai8/CartItem";
import Header from "./assets/components/bai8/Header";
import ListCart from "./assets/components/bai8/ListCart";
import Menu from "./assets/components/bai8/Menu";
import Nav from "./assets/components/bai8/Nav";
import Article from "./assets/components/bai8/article";


export default function App() {
  const users = [
    {
      id: 1,
      name: "Macel",
      dateOfBirth: "12/12/2022",
      gender: "Nam",
      address: "Hà Nội"
    },
    {
      id: 2,
      name: "Maria",
      dateOfBirth: "2/09/2001",
      gender: "Nữ",
      address: "HCM"
    }
  ]
  return (
    <>
      {/* <Bt1></Bt1>
      <Bt2></Bt2>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt6></Bt6>
      <Bt7></Bt7>
    */}
    {/* <CartItem></CartItem> */}
      <div className="container">
        <Header></Header>
        <Nav></Nav>
        <main className="main">
        <Menu></Menu>
          <ListCart></ListCart>
          <Article></Article>
        </main>
        <div className='container'>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Địa chỉ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=> (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
            ))}
           
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}></td>
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
    </>
  );
}
