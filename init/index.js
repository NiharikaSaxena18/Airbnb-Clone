const mongoose=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing");

const mongo_url="mongodb://127.0.0.1:27017/travel";

main().then(()=>{
	console.log("Connection to database successful");
}).catch((err)=>console.log(err));

async function main() {await mongoose.connect(mongo_url);}

const initDB = async () => {
	await Listing.deleteMany({});
	initData.data=initData.data.map((obj)=>({...obj, owner: "676ff09c2022eed57d544d18"}));
	await Listing.insertMany(initData.data);
	console.log("Data was initialised");
}

initDB();