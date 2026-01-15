const details = JSON.parse(document.getElementById("billDetails").textContent);
 
            const tableBody = document.getElementById('tableBody');
            let total = 0;
            const minRows = 10;
            tableBody.innerHTML = "";

            details.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.date}</td>
                    <td>${item.from}</td>
                    <td>${item.to}</td>
                    <td>${item.trip}</td>
                    <td>${item.dec}</td>
                    <td>${Number(item.amount).toFixed(2)}</td>
                `;
                tableBody.appendChild(row);
                total += Number(item.amount);
            });

            for (let i = details.length; i < minRows; i++) {
                tableBody.insertAdjacentHTML("beforeend", `
                    <tr>
                        <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
                        <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
                    </tr>
                `);
            }

            document.getElementById('totalAmount').textContent = total.toFixed(2);
            document.getElementById('amountInWords').textContent = 100
        

        function numberToWords(num) {
            const ones = ['', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
            const tens = ['', '', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
            const teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
            if(num===0) return 'Zero Rupees Only';
            let words = '';
            if(num >= 10000000){ words += numberToWords(Math.floor(num/10000000)) + ' Crore '; num %= 10000000; }
            if(num >= 100000){ words += numberToWords(Math.floor(num/100000)) + ' Lakh '; num %= 100000; }
            if(num >= 1000){ words += numberToWords(Math.floor(num/1000)) + ' Thousand '; num %= 1000; }
            if(num >= 100){ words += ones[Math.floor(num/100)] + ' Hundred '; num %= 100; }
            if(num >= 20){ words += tens[Math.floor(num/10)] + ' '; num %= 10; }
            if(num >= 10){ words += teens[num-10] + ' '; num = 0; }
            if(num > 0){ words += ones[num] + ' '; }
            return words.trim() + ' Rupees Only';
        }

 