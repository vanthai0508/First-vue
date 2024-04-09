<template>
    <!-- <div id="app"> -->
      <div class="sidebar">
        <img src="https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg" alt="Avatar" class="avatar">
        <ul>
          <li v-for="item in sidebarItems" :key="item.id">
            <a :href="item.url">
              <img :src="item.icon" alt="icon" class="icon">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
      <!-- <div class="content"> -->
        <!-- Your main content here -->
      <!-- </div> -->
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        sidebarItems: [
          { id: 1, label: 'Message', url: '/', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPI63-uECZX_AWLbqZP9BUSBWH4sJ1i9irGUGI7TFwwPkAI6EyilTvoaCMJwnvAuhlIuE&usqp=CAU' },
          { id: 2, label: 'About', url: '/about', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzkcR7I1Do5vdIBxzHKsHe1JzpAMJBK1RoakKhDpowJwx59FVDg9bBDO1rUxwW7Wq1m4&usqp=CAU' },
          { id: 3, label: 'Contact', url: '/contact', icon: 'https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png' }
          // Add more items as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  .sidebar {
    width: 100%;
    height: 100%;
    /* position: fixed; */
    top: 0;
    left: 0;
    background-color: #faf8f8;
    color: #fff;
    padding-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding-top: 40px;
    /* pa */
    
  }

  .sidebar ul li a {
    text-decoration: none;
    color: #555252;
    
    border-left: 4px solid transparent; /* Đường viền bên trái mặc định */
    transition: border-left-color 0.3s; /* Thêm hiệu ứng chuyển đổi */
    /* box-shadow: 1px 1px 1px #AAA; */
    padding-left: 30px;
  }

  .sidebar a:hover {
  color: #3089ce; /* Màu sẽ thay đổi khi hover vào liên kết */
  border-left-color: #3089ce;
}
  
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .avatar {
    /* padding-left: 30px; */
    padding: 40px;
    width: 100px; /* Độ rộng của hình ảnh */
    height: 100px; /* Chiều cao của hình ảnh */
    border-radius: 50%; /* Bo tròn hình ảnh để tạo hình ảnh tròn */
    margin-right: 10px; /* Khoảng cách giữa hình ảnh và tên */
    /* text-align: center; */
  }
  </style>
  