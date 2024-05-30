Kết nối database MySQL(Có sử dụng thư viện Sequelize)

API CRUD

Có 2 đối tượng là user và game:

    - Để sử dụng api/games thì phải có tài khoản đăng kí -> đăng nhập ở api/users. 
    
    - Sử dụng jwt để kiểm tra tài khoản đăng nhập và cấp quyền sử dụng api/games.
    
    - Sử dụng bcrypt để mã hóa mật khẩu khi lưu vào DB.

Hưỡng dẫn chạy code:

    B1: Mở MySQL, chỉnh sửa chi tiết kết nối cho phù hợp với database trong code file DB.js

    B2: Chạy code: npm start

    B3: Sử dụng Postman kiểm thử API



