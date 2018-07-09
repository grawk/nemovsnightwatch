# Nemo vs Nightwatch

Repo comparing Nemo and Nightwatch for automation of browser UI


## Summary

|Category|Nemo|Nightwatch|Notes|
|--- |--- |--- |--- |
|Pre-requisites|requires *driver binary|* driver binary, * selenium server standalone|less effort getting started with Nemo. fewer dependencies. less strain on local system.|
|Test Configuration|JSON/JS/confit|JSON/JS|matter of style|
|WebDriver|selenium-webdriver JavaScript bindings|custom implementation|selenium-webdriver wins|
|Driver configuration|access to selenium-webdriver browser options APIs|some via JSON, otherwise "cli-args" to selenium server|selenium-webdriver provides programmatic, up-to-date driver configuration vs more esoteric CLI style of
configuration|
|Debugging|use standard `--inspect` CLI arg, chrome debugger|no obvious instructions. must use callback functions because of chained commands|easier to debug nemo tests|
|Parallel running|by data maps, by test files, by profiles, by grep, or combination of these|by test environment (profiles)|Nemo provides easier parallel running, better parallel output and reporting.|
|Reporting|date/time based report structure. mochawesome/xunit in the box. all mocha reporters possible|XML and html based reports|Nemo has great capacity for organizing reports in a parallel run environment. Nemo's summary output is clear on how the tests ran in parallel and where to find reports.|
|Health of project|8,300 stars, 120k downloads/week|250 stars, 500 downloads/week (doesn't count paypal internal)|Nightwatch has a clear advantage in terms of popularity.|
