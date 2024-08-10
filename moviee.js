let selectedSeats = [];
        let seatPrices = [];
        let selectedMovie = '';
        const initiallyBookedSeats = ['C2', 'C4', 'B15', 'A39', 'A42'];

        document.addEventListener('DOMContentLoaded', (event) => {
            initiallyBookedSeats.forEach(seatId => {
                const seat = document.getElementById(seatId);
                seat.style.backgroundColor = 'green';
                seat.setAttribute('data-booked', 'true');
            });
        });

        function selectSeat(seatId, price) {
            const seat = document.getElementById(seatId);
            if (seat.getAttribute('data-booked') === 'true') {
                alert('Seat already booked. Please select another seat.');
                return;
            }
            if (seat.style.backgroundColor === 'green') {
                seat.style.backgroundColor = '';
                removeSeat(seatId, price);
            } else {
                if (selectedSeats.length >= 4) {
                    alert("You can select a maximum of 4 seats.");
                    return;
                }
                seat.style.backgroundColor = 'green';
                addSeat(seatId, price);
            }
                const bk=document.getElementById("bk");
                bk.style.display='block';
        }

        function addSeat(seatId, price) {
            selectedSeats.push(seatId);
            seatPrices.push(price);
        }

        function removeSeat(seatId, price) {
            const index = selectedSeats.indexOf(seatId);
            if (index > -1) {
                selectedSeats.splice(index, 1);
                seatPrices.splice(index, 1);
            }
        }

        function bookMovie(movieName) {
            selectedMovie = movieName;
            const seat1 =document.getElementById("seat1");
            seat1.style.display='block';
            seat1.style.display='grid';
            const sc1 =document.getElementById("sc1");
            sc1.style.display='block';
            const m5=document.getElementById("m5");
            m5.style.display='block';
            m5.style.display='grid';
        }
        function bn(){
            const m2=document.getElementById("m2");
            m2.style.display='block';
            const m3=document.getElementById("m3");
            m3.style.display='block';
            m3.style.display='flex';
        }

        function addnew() {
            const container = document.getElementById('container');
            container.style.display = 'block';
            container.innerHTML = '';

            const username = document.getElementById('username').value;
            const movieDetails = document.createElement('div');
            movieDetails.classList.add("m1");
            movieDetails.innerHTML = `<strong>Username&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp${username}<br><br><br>
                                      <strong>Movie&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${selectedMovie}<br><br><br>
                                      <strong>Seats&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${selectedSeats.join(', ')}<br><br><br>
                                      <strong>Seat Prices&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${seatPrices.join(', ')}<br><br><br>
                                      <strong>Total Price&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${seatPrices.reduce((a, b) => a + b,0)}`;
            container.appendChild(movieDetails);
        }
