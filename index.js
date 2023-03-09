// import userModel from './models/users.js'
import mongoose from 'mongoose'
import courseModel from './models/course.js'
import studentModel from './models/student.js'

const uri = "mongodb+srv://coder:coder@cluster0.ef7umxt.mongodb.net/?retryWrites=true&w=majority"

const main = async() => {
    await mongoose.connect(uri, {
        dbName: 'coderhouse'
    })

    console.log('DB connected!')

    // const response = await userModel.find({first_name: 'Celia'}).explain('executionStats')
    // // const response = await userModel.find({first_name: 'Celia'})
    // console.log(response)

    // await studentModel.create({
    //     first_name: 'Alex',
    //     last_name: 'Marin',
    // })

    // await courseModel.create({
    //     title: 'Defensa contra las bacterias tecnolgógicas',
    //     description: 'Saber defenderse de las computadoras ineligene',
    //     difficulty: 5,
    //     topics: ['tema 1', 'tema 2'],
    //     proffesor: 'Pablo'
    // })

    // const student = await studentModel.find({ _id: "6409209bc85056aaaeff132e"}).populate('courses.course')
    const student = await studentModel.find({ _id: "6409209bc85056aaaeff132e"})
    console.log(JSON.stringify(student, null, '\t'))

    // const student = await studentModel.findOne({ _id: "6409209bc85056aaaeff132e"})
    // student.courses.push({ course: '640921d671ff4b1c83027af9'})
    // const result = await studentModel.updateOne({ _id: '6409209bc85056aaaeff132e'}, student)
    // console.log(student)

    process.exit(1)
}

main()

// find() => 3 milisegundos
// find('Celia') => 3 milisegundos