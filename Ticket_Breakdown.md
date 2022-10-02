# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

    In the agent table , we need to create new column/field to allow the Facilities to save custom ids (we can name the column/field as "tags")
    By using this tag we can perform queries and manipulation on agents.

1. Ticket 1
   Description : Modify Agent Schema to allow custom id to be saved. Name the field as "tags". For now we need to keep this field to have nullable as true also since the application is already used and we wont be having the tags for the agents created before.

   Time Estimate : 60 mins

2. Ticket 2
   Description : Add a new column on the UI of the create/update agent to get the tag and save it in DB. Since the tag can we null for now so need to handle in Backend API if the tag is passed and empty then there should not be any issue in saving it. (the reason of tags being null is that the current agents in db do not have tags)
   Accepted if : Able to store tags correctly in DB and visible on UI in agents details page
   Time estimate : 120 mins

3. Ticket 3
   Description : Modify `getShiftsByFacility` function to return the tags along with metadata about the agents.
   Accepted if : API returns tags along with metadata
   Time estimate : 90 mins

4. Ticket 4
   Description : Update UI to allow the generate report to be done using either on the basis of shift or on the basis of agent tags
   Accepted if : I can select agent tags on UI to generate reports
   Time estimate : 120 mins

5. Ticket 5
   Description : Update `generateReport` api to handle the case for generating report based on tags as well.
   Accepted if : returning correct report data based on agents tag and shifts
   Time estimate : 150 mins

6. Ticket 6 (optional)
   Description : This will be one time work . Need to connect with client to get tags for already existing agents and create script to add them in database as once
   Time estimate : 120 mins
