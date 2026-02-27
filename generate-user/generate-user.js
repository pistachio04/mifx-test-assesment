import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres_0ed5707cf47c45bea48e40860e951ca2',
        },
    });

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    if (res.status !== 200) {
        console.log('Request gagal');
    }

    const users = res.json().data;

    // Tambah data user ke CSV
    let csvContent = 'first_name,last_name,email\n';
    users.forEach(user => {
        csvContent += `${user.first_name},${user.last_name},${user.email}\n`;
    });

    console.log('CSV sementara:\n', csvContent);

    return csvContent;
}

// handleSummary harus menerima data dari default function
export function handleSummary(csvContent) {
    console.log('Menambah data user ke CSV');
    return {
        'users.csv': csvContent,
    };
}