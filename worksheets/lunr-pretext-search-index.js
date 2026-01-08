var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "Week1Monday",
  "level": "1",
  "url": "Week1Monday.html",
  "type": "Handout",
  "number": "1.1",
  "title": "Monday Week 1 - Review of Functions with Algebra",
  "body": " Monday Week 1 - Review of Functions with Algebra     Review functions, function notation, and inputs\/outputs using algebra.  Review the domain and range of a function.     Today we will review inputs and outputs of functions.     A function is ...    The most fundamental tasks with functions are to evaluate them at an input (to obtain the output) and solve for the input given the output.    Let . Find and solve the equation .       Evaluate and Solve Exercises    Let . Evaluate and solve the equation .    Let . Evaluate and solve the equation .         The domain of a function is..  The range of a function is..    To find the domain and\/or range of a function, some useful strategies are...    Find the domain and range of .         Exercises Finding the Domain  Find the domain of each of the following functions.                          "
},
{
  "id": "Week1Monday-2-1",
  "level": "2",
  "url": "Week1Monday.html#Week1Monday-2-1",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Review functions, function notation, and inputs\/outputs using algebra.  Review the domain and range of a function.   "
},
{
  "id": "def-function",
  "level": "2",
  "url": "Week1Monday.html#def-function",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A function is ...   "
},
{
  "id": "Week1Monday-2-5",
  "level": "2",
  "url": "Week1Monday.html#Week1Monday-2-5",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "  Let . Find and solve the equation .     "
},
{
  "id": "def-domain-range",
  "level": "2",
  "url": "Week1Monday.html#def-domain-range",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": "  The domain of a function is..  The range of a function is..   "
},
{
  "id": "Week1Monday-3-3",
  "level": "2",
  "url": "Week1Monday.html#Week1Monday-3-3",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "  Find the domain and range of .     "
},
{
  "id": "Week1Wed",
  "level": "1",
  "url": "Week1Wed.html",
  "type": "Handout",
  "number": "1.2",
  "title": "Wednesday Week 1 - Functions with Graphs and Tables",
  "body": " Wednesday Week 1 - Functions with Graphs and Tables     Recall how to evaluate functions and solve equations with graphs and tables.  Find the domain and range of a function graphically.     In addition to formulas, functions may be represented with input-output tables and with graphs. Every procedure we learned on Monday has a graphical interpretation. But first, let's do a warm-up exercise.    Warm-up Question  Let . Solve the equation .      Data for the observed rainfall, , in Tucson is given in the table below. Assume is in months and represents January.     (months)    (inches)      Find and interpret .    Solve the equation and give the practical meaning of the solution(s).    Solve the equation and give the practical meaning of the solution(s).          The graph of a function is ...    Given a function , we can evaluate, solve equations, find the domain, and find the range graphically as follows:    To evaluate ...    To solve ...    The domain of is...    The range of is...      Consider the function , graphed with Desmos below (use QR code to get it on your own device).           Solve the equation using the graph.    Find the domain of from the graph.    Find the range of from the graph.         Graphical Domain and Range Exercises  Find the domain of each of the following functions using a Desmos graph.                          "
},
{
  "id": "Week1Wed-2-1",
  "level": "2",
  "url": "Week1Wed.html#Week1Wed-2-1",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Recall how to evaluate functions and solve equations with graphs and tables.  Find the domain and range of a function graphically.   "
},
{
  "id": "Week1Wed-2-3",
  "level": "2",
  "url": "Week1Wed.html#Week1Wed-2-3",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": " Warm-up Question  Let . Solve the equation .   "
},
{
  "id": "Week1Wed-2-4",
  "level": "2",
  "url": "Week1Wed.html#Week1Wed-2-4",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": "  Data for the observed rainfall, , in Tucson is given in the table below. Assume is in months and represents January.     (months)    (inches)      Find and interpret .    Solve the equation and give the practical meaning of the solution(s).    Solve the equation and give the practical meaning of the solution(s).     "
},
{
  "id": "function-graph",
  "level": "2",
  "url": "Week1Wed.html#function-graph",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": "  The graph of a function is ...   "
},
{
  "id": "Week1Wed-3-4",
  "level": "2",
  "url": "Week1Wed.html#Week1Wed-3-4",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": "  Consider the function , graphed with Desmos below (use QR code to get it on your own device).           Solve the equation using the graph.    Find the domain of from the graph.    Find the range of from the graph.     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
