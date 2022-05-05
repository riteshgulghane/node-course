// require('./config/db');

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "EcoImpact@123",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});




const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Chennai',
    'Kolkata',
    'Surat',
    'Pune',
    'Jaipur',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Pimpri-Chinchwad',
    'Patna',
    'Vadodara',
    'Ghaziabad',
    'Ludhiana',
    'Agra',
    'Nashik',
    'Ranchi',
    'Faridabad',
    'Meerut',
    'Rajkot',
    'Kalyan-Dombivli',
    'Vasai-Virar',
    'Varanasi',
    'Srinagar',
    'Aurangabad',
    'Dhanbad',
    'Amritsar',
    'Navi Mumbai',
    'Allahabad',
    'Howrah',
    'Gwalior',
    'Jabalpur',
    'Coimbatore',
    'Vijayawada',
    'Jodhpur',
    'Madurai',
    'Raipur',
    'Kota',
    'Chandigarh',
    'Guwahati',
    'Solapur',
    'Hubli–Dharwad',
    'Mysore',
    'Tiruchirappalli',
    'Bareilly',
    'Aligarh',
    'Tiruppur',
    'Gurgaon',
    'Moradabad',
    'Jalandhar',
    'Bhubaneswar',
    'Salem',
    'Warangal',
    'Mira-Bhayandar',
    'Jalgaon',
    'Guntur',
    'Thiruvananthapuram',
    'Bhiwandi',
    'Saharanpur',
    'Gorakhpur',
    'Bikaner',
    'Amravati',
    'Noida',
    'Jamshedpur',
    'Bhilai',
    'Cuttack',
    'Firozabad',
    'Kochi',
    'Nellore',
    'Bhavnagar',
    'Dehradun',
    'Durgapur',
    'Asansol',
    'Rourkela',
    'Nanded',
    'Kolhapur',
    'Ajmer',
    'Akola',
    'Gulbarga',
    'Jamnagar',
    'Ujjain',
    'Loni',
    'Siliguri',
    'Jhansi',
    'Ulhasnagar',
    'Jammu',
    'Sangli-Miraj & Kupwad',
    'Mangalore',
    'Erode',
    'Belgaum',
    'Kurnool',
    'Ambattur',
    'Rajahmundry',
    'Tirunelveli',
    'Malegaon',
    'Gaya',
    'Udaipur',
    'Karur',
    'Kakinada',
    'Davanagere',
    'Kozhikode',
    'Maheshtala',
    'Rajpur Sonarpur',
    'Bokaro',
    'South Dumdum',
    'Bellary',
    'Patiala',
    'Gopalpur',
    'Agartala',
    'Bhagalpur',
    'Muzaffarnagar',
    'Bhatpara',
    'Panihati',
    'Latur',
    'Dhule',
    'Rohtak',
    'Sagar',
    'Korba',
    'Bhilwara',
    'Berhampur',
    'Muzaffarpur',
    'Ahmednagar',
    'Mathura',
    'Kollam',
    'Avadi',
    'Kadapa',
    'Anantapuram',
    'Kamarhati',
    'Bilaspur',
    'Sambalpur',
    'Shahjahanpur',
    'Satara',
    'Bijapur',
    'Rampur',
    'Shimoga',
    'Chandrapur',
    'Junagadh',
    'Thrissur',
    'Alwar',
    'Bardhaman',
    'Kulti',
    'Nizamabad',
    'Parbhani'
]

const names = [
    'John',
    'Peter',
    'Amy',
    'Hannah',
    'Michael',
    'Sandy',
    'Betty',
    'Richard',
    'Susan',
    'Vicky',
    'Ben',
    'William',
    'Chuck',
    'Viola',
    'Viola',
    'Vishal',
    'Akshay',
    'Rajesh',
    'Ritesh',
    'Pruthvi',
];

function getRandomIndex(length) {
    return Math.floor(Math.random() * length)

}

function getCity() {
    return cities[getRandomIndex(cities.length)]
}
function getName() {
    return names[getRandomIndex(names.length)]
}

function getNameCity() {
    let result = [];

    for (let i = 0; i < 200; i++) {
        let temp = [];
        temp.push(getName());
        temp.push(getCity());
        result.push(temp)
    }

    return result;
}

let values = getNameCity();

// console.log(values);


// con.connect(function (err) {
// if (err) throw err;
// console.log("Connected!");

// let query = "Create Table friends(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(40), city varchar(40))"

// con.query(query, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });

var sql = "INSERT INTO friends (name, city) VALUES ?";

con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});
// });
