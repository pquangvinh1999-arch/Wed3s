// Chuyển đổi giữa các menu
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Khởi tạo Chart.js cho Dashboard
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
        datasets: [{
            label: 'Doanh thu (Triệu VNĐ)',
            data: [12, 19, 15, 25],
            borderColor: '#0284c7',
            backgroundColor: 'rgba(2, 132, 199, 0.2)',
            borderWidth: 3,
            tension: 0.4, // Tạo đường cong futuristic
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
            x: { grid: { display: false } }
        }
    }
});

/* 
* Tích hợp Supabase (JS Thuần)
* Cần import Supabase CDN vào HTML: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
*/
// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
// const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Ví dụ hàm lấy đơn hàng:
// async function fetchOrders() {
//     let { data: orders, error } = await supabase.from('orders').select('*');
//     if(error) console.error(error);
//     console.log(orders);
// }