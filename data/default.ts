import figlet from "figlet";

const body = figlet.textSync("Dummy/", "Doh");

export default `
<html>
    <head>
        <meta name="color-scheme" content="dark">     
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
    </head>
    <body>
        <style>
            body {        
                font-family: "Roboto Mono", monospace;
                font-optical-sizing: auto;
                font-weight: 300;
                font-style: normal;
                text-align: center;
            }
            p {
                padding: 0 1.5em 0 1.5em;
            }
            h1 {
                padding: 0 1.5em 0 1.5em;
                margin: 10vh auto 2em auto;
                max-width: 1024px;
            }
            ul { 
                list-style-position: inside;
                width: max-content;
                text-align: left;
                margin: auto;
            }
            a {
                color: #a78bfa;
            }
        </style>
        <pre>${body}</pre>
        <h1>A simple dummy server returning various outputs for the Homeapp example service in JSON format.</h1>
        <p>Try the following routes:<br>
            <ul>
                <li><a href="/bookings">/bookings</a> - Returns dummy booking data for each day</li>
                <li><a href="/calendar">/calendar</a> - Returns dummy calendar data</li>
                <li><a href="/forecast">/forecast</a> - Returns dummy weather forecast data</li>
                <li><a href="/prices">/prices</a> - Returns dummy electricity prices for every hour</li>
            </ul>
        </p>
    </body>
</html>
`;
