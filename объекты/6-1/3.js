let city=prompt();
let date=prompt();
let duration=prompt();

const trip={
    city,
    date,
    duration
};

console.log(!isNaN(trip.duration) ?`${trip.date} вы отправляетесь в ${trip.city} на ${trip.duration} дней`:
            `${trip.date} вы отправляетесь в ${trip.city} на неопределенное количество дней `);