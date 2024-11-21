## ascii-sheet-js
A program to dynamically translate ascii spreadsheets into html tables.

How to Use the <sheet> Tag
Overview

The <sheet> tag is a custom HTML element designed to store and display ASCII tables in a structured HTML format. When the page loads, the content inside the <sheet> element is automatically converted into a neat HTML table. This functionality allows for quick and easy display of data stored in plain text ASCII table format on a webpage.

This guide will explain how to use the <sheet> tag in your HTML documents.
How the <sheet> Tag Works

The <sheet> tag is not a standard HTML tag, but it can be utilized with a simple JavaScript script to render its contents as a formatted HTML table. The ASCII table content inside the <sheet> element is converted to HTML during the page load.
Example of ASCII Table in a <sheet> Tag

You can define a <sheet> element with an ASCII table inside it like this:


The above code will display an ASCII-style table inside the <sheet> element when rendered.
Steps for Using <sheet> in Your HTML Page

    Add the <sheet> Tags: Place the ASCII table content inside a <sheet> tag. This can be done for as many tables as you need.


Include JavaScript for Conversion: To automatically convert the ASCII table into a proper HTML table, you need to add a JavaScript script. The script will process the content inside each <sheet> tag and transform it into an HTML table on page load.



#Benefits of Using <sheet>

    Simplicity: You can easily store data in a human-readable ASCII table format within your HTML code.
    Automatic Conversion: The JavaScript automatically converts the ASCII content to a structured HTML table, saving time and effort.
    Visual Clarity: The data is presented in a clean, table-like format without any additional coding or CSS styling.
    Reusability: You can use the <sheet> tag as many times as needed within a page to display multiple ASCII tables.
