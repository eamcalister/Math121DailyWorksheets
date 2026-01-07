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
  "id": "objectives",
  "level": "2",
  "url": "Week1Monday.html#objectives",
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
