

const TableUserList = (props) => {
  
  return (
      <table border>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
        </tr>
      {props.users.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <button
              onClick={(e) => {
                props.onEdit(user);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                props.onDelete(user);
                 }}>
              Delete
            </button>
          </tr>
        );
      })}
      </table>
  );
}
export default TableUserList;
