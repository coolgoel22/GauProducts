export class Constants{
    public static getCitiesOfAState(state): string[]{
        let stateNCities =  {
            "Haryana":["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind",    "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula",             "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar", "Charkhi Dadri" ],

            "Punjab":["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Firozpur",                   "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa",           "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit                  Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Taran Taran"],
            "Uttar Pradesh":["Agra", "Firozabad", "Mainpuri", "Mathura", "Aligarh", "Etah", "Hathras",      "Kasganj", "Allahabaad", "Fatehpur", "Kaushambi", "Pratapgarh", "Azamgarh", "Ballia", "Mau", "Budaun", "Bareilly", "Pilibhit", "Shahjahanpur", "Basti", "Sant Kabir Nagar", "Siddharthnagar", "Banda", "Chitrakoot", "Hamirpur", "Mahoba", "Bahraich", "Balarampur", "Gonda", "Shravasti", "Ambedkar Nagar", "Amethi", "Barabanki", "Faizabad", "Sultanpur", "Deoria", "Gorakhpur", "Kushinagar", "Maharajganj", "Jalaun", "Jhansi", "Lalitpur", "Auraiya", "Etawah", "Farrukhabad", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Hardoi", "Lakhimpur Kheri", "Lucknow", "Raebareli", "Sitapur", "Unnao", "Bagpat", "Bulandshahr", "Gautam Buddha Nagar", "Ghaziabad", "Hapur", "Meerut", "Mirzapur", "Sant Ravidas Nagar", "Sonbhadra", "Amroha", "Bijnor", "Moradabad", "Rampur", "Sambhal", "Muzaffarnagar", "Saharanpur", "Shamli", "Chandauli", "Ghazipur", "Jaunpur", "Varanasi"],
            "Delhi": ["Daryaganj", "Paharganj", "Karol Bagh", "Sadar Bazaar", "Kotwali", "Civil Lines", "Kalkaji", "Defence Colony", "Hauz Khas", "Laxmi Nagar", "Preet Vihar", "Vivek Vihar", "Shahdara", "Naveen Shahdara", "Rohtash Nagar", "Vasant Vihar", "Najafgarh", "Delhi Cantonment", "Connaught Place", "Parliament Street", "Chanakyapuri", "Saraswati Vihar", "Narela", "Model Town[3]", "Patel Nagar", "BTM Bagh", "IT park Garden" ]
        }

        return stateNCities[state];
    }
    public static getSettingColumns(): Object[] {
        return ["name", "mobileNo", "age", "email", "address", "workingArea", "profession", "isFullTime"];
    }
    public static getColumnKeyValue(): Object {
        return {
            "name": "Name",
            "mobileNo": "Mobile No",
            "age": "Age",
            "email": "Email",
            "address": "Address",
            "workingArea": "Working Area",
            "profession": "Profession",
            "isFullTime": "Is Full Time in Panchgavyas",
            "showDetails": false
        };
    }
    public static getStates(): string[] {
        return ["Delhi", "Haryana", "Punjab", "Uttar Pradesh"];
        // return ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
    }
}