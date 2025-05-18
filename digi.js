function showDate() {
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth() + 1; // Months are zero-indexed
            var year = date.getFullYear();

            // Add leading zeros to day and month
            day = (day < 10) ? '0' + day : day;
            month = (month < 10) ? '0' + month : month;

            var currentDate = day + '/' + month + '/' + year;
            document.getElementById('DateDisplay').innerText = currentDate;
        }

        showDate();