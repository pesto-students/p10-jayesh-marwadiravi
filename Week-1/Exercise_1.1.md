# Exercise1.1:
Question 1.1 - When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.(2-3hours)
  a. What is the main functionality of the browser?
  b. High Level Components of a browser.
  c. Rendering engine and its use.
  d. Parsers (HTML, CSS, etc)
  e. Script Processors
  f. Tree construction
  g. Order of script processing
  h. Layout and Painting
  
  ![image](https://user-images.githubusercontent.com/108273689/224480409-ef9bec7d-c7f4-4be5-87d2-906ebe31d7e1.png)



#### When a user enters a URL in the browser, the browser follows a series of steps to fetch the desired result:

1. Parsing the URL: The browser parses the URL entered by the user to identify the protocol (HTTP or HTTPS), domain name, path, and query parameters.

2. DNS Lookup: The browser performs a DNS lookup to convert the domain name into an IP address. This involves sending a request to a DNS server to obtain the IP address associated with the domain name.

3. Establishing a TCP Connection: The browser establishes a TCP connection with the server using the IP address obtained in the previous step. This involves a three-way handshake between the browser and the server.

4. Sending an HTTP Request: Once the TCP connection is established, the browser sends an HTTP request to the server. The request contains the method (GET, POST, PUT, DELETE, etc.), the path, and any query parameters.

5. Receiving the HTTP Response: The server processes the request and sends an HTTP response back to the browser. The response contains a status code (e.g., 200 for success, 404 for not found), headers (e.g., content type, cache-control), and a response body (e.g., HTML, JSON).

6. Rendering the Response: The browser receives the response and renders it on the screen. This involves parsing the HTML, CSS, and JavaScript, and displaying the content in the browser window.

7. Closing the Connection: Once the response has been rendered, the browser closes the TCP connection with the server.


#### Main functionality of browser:

The main functionality of a browser is to enable users to access and view content on the World Wide Web. Here are some of the main functions of a browser:

Rendering web pages: Browsers interpret the HTML, CSS, and JavaScript code on web pages to display them to users. This involves parsing the code and rendering the page with text, images, and multimedia content.

Navigation: Browsers enable users to navigate between web pages using hyperlinks, back and forward buttons, and bookmarks.

Security: Browsers provide security features such as SSL encryption, certificate validation, and popup blocking to protect users from malware, phishing, and other online threats.

Tabbed browsing: Browsers allow users to open multiple web pages in separate tabs, which makes it easier to switch between pages and keep track of multiple tasks.

Search: Browsers often include a search bar that allows users to perform web searches from within the browser. They may also include search suggestions and auto-complete features to make searching faster and more convenient.

Extensions and add-ons: Browsers allow users to customize their browsing experience with extensions and add-ons that provide additional functionality, such as ad blocking, password managers, and social media integrations.

Overall, the main functionality of a browser is to provide a user-friendly interface for accessing and interacting with the World Wide Web.

#### High Level Component of Browser

A browser consists of several high-level components that work together to provide the user with a seamless browsing experience. These components include:

1. User Interface (UI): The user interface is the part of the browser that the user interacts with. It includes the address bar, toolbar, tabs, menus, and other elements that allow the user to navigate the web, access settings, and perform other tasks.

2. Rendering engine: The rendering engine is responsible for parsing HTML, CSS, and JavaScript code and rendering web pages on the screen. Different browsers use different rendering engines, such as Blink (used in Chrome), Gecko (used in Firefox), and WebKit (used in Safari).

3. JavaScript engine: The JavaScript engine is responsible for executing JavaScript code on web pages. Browsers typically use their own JavaScript engines, such as V8 (used in Chrome) and SpiderMonkey (used in Firefox).

4. Networking stack: The networking stack handles network requests and responses. It includes protocols such as HTTP and HTTPS, and handles tasks such as DNS resolution, establishing TCP connections, and transferring data.

5. Browser extensions: Browser extensions are small software programs that users can install to add new functionality to the browser, such as ad blockers, password managers, and social media integrations. Extensions are typically developed using web technologies such as HTML, CSS, and JavaScript.

6. Browser security features: Browsers include a variety of security features to protect users from online threats such as malware, phishing, and identity theft. These features may include SSL encryption, certificate validation, popup blockers, and safe browsing warnings.

These components work together to provide the user with a fast, secure, and user-friendly browsing experience.

![image](https://user-images.githubusercontent.com/108273689/224480449-408d48cf-ddf2-47d0-871e-098ce65130c0.png)



#### Script processing in a browser involves several steps. Here is an overview of the process:

Parsing: The browser downloads the web page and starts parsing the HTML markup. If the browser encounters a script tag (either inline or external), it will pause parsing and start downloading and executing the script.

Execution: Once the script has been downloaded, the browser executes it. Scripts can be executed in the global scope, or within a function or other block of code.

DOM manipulation: If the script modifies the DOM (Document Object Model), the browser updates the in-memory representation of the web page accordingly. This can include adding or removing elements, changing the text or attributes of elements, and more.

Layout and Rendering: If the script changes the size, position, or visibility of elements on the web page, the browser may need to re-compute the layout and repaint the affected areas of the screen.

Script completion: Once the script has finished executing, the browser resumes parsing the HTML markup and continues to build the DOM tree. The browser may also continue downloading and executing additional scripts as it encounters them.

It's important to note that scripts can have a significant impact on the performance of a web page, particularly if they make frequent DOM manipulations or cause layout reflows. To optimize performance, scripts should be written in a way that minimizes their impact on the layout and rendering process. For example, scripts that modify the DOM should be executed after the DOM has been fully loaded and constructed to avoid layout thrashing.


References:
1. https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/
2. https://dev.to/salyadav/behind-the-scenes-from-the-moment-you-enter-a-url-1img
3. https://developer.mozilla.org/en-US/
