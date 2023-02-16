# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### TODO

- 1 Table changes => 12h
  - [ ] Generate backup of data base or ensure that is up to date.
  - [ ] Create table affiliated_agent
  - [ ] Add columns to table
    - [ ] id => uuid
    - [ ] custom_id => string, unique, provided by client that should be used to generate views
    - [ ] agent_id => make reference to main table of agents
    - [ ] facilities_id => make reference to main table of facilities
  - [ ] Create migration changes script
  - [ ] Create migration revert script
  - [ ] Create script to import data provided by client
  - [ ] Import data and test
- 2 Update View => 12h
  Considering that we have just one view that must be change to use this new table
  - [ ] Update functions to use new table as:
    - [ ] filter
    - [ ] group option
    - [ ] order option
  - [ ] Update tests
- 3 Automation tests => 8h
  - [ ] Update Automation e2e tests
