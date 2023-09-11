# Package
1. express: npm install --save-exact express@4.17.2 : Framework NodeJS
2. dotenv: @10.0.0
3. body-parser: @1.19.1
4. ejs: @3.1.6 -> sử dụng công nghệ **ejs** để code HTML cho NodeJS
5. nodemon: @2.0.15

# Folders
1. configs: 
2. controllers:
3. services:
4. public:
5. views:
6. routes: điều hướng trang

# Out Files
1. .gitignore:
2. .env
3. .babelrc : trÌnh dịch code -> sd thêm **package**: @babel/core@7.15.4 @babel/node@7.15.4 @babel/preset-env@7.15.4


# Models - Views - Controllers

1. Router (=URL website) => ex: /user

    - route => controller handle => render view

2. Models
    - Các bảng trong Database

3. Views
    - File .ejs

4. Controllers
    - Xử lý lấy dữ liệu từ Database (dùng services) => đưa vào Models
    - Trả data vào views

5. Các nghiệp vụ liên quan đến DB => xử lý tại các file trong folder "services"