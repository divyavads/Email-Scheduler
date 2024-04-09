## setup

You can set up this application by first downloading it off of Github.
<br>
`git clone https://github.com/divyavads/Email-Scheduler.git`

### node

Next, open a terminal window and ensure that node is installed. You can follow the instructions on this link: https://nodejs.org/en.

### install dependencies

Once node is downloaded, you run the command `npm i` on a terminal window. You should be able to run the application using the command "npm start."

### google app password

Make sure you have 2-factor authentication enabled on your gmail account Next, make sure to set up app passwords for Google to allow the script to send emails from your gmail account. You can follow the instructions on here: https://support.google.com/mail/answer/185833?hl=en.

### environment variables

Copy the contents of .env.example into a new file called .env and make the contents of "EMAIL_USER" and "EMAIL_PASS" be the app user and password generated using the link above.
The recipient email is just the email of the recipient put into RECIPIENT_EMAIL in your .env file. Please refer to the note at the end for multiple recipients.

### running the app

Once you run the `npm start` you should get an output console that that your email is scheduled. At 10am, the email will be sent, and the console will output that the email has been sent.

Note: If you want to send an email to multiple users, then put in a list with the following format:
RECIPIENT_EMAIL=user1@email.com, user2@email.com
