# Node Intro

[**Optional Resource**](https://lessons.springboard.com/da015fbd1d774cdba8e75143b5eb030a?pvs=21)- This is not a part of the required curriculum but is meant as an additional source of information and exercise to reinforce the fundamentals. If you feel that you are comfortable with the core Node.js concepts then feel free to skip it. That being said, if you want to explore the workings of Node.js further, refer to this handout for additional concepts and information.

[Download exercise](https://curric.springboard.com/software-engineering-career-track/default/exercises/node-files.zip)

In this exercise, you will practice working with Node, NPM, and the **_file_** API.

You’ll be building a program similar to the standard UNIX utility, [cat 🐈](http://www.linfo.org/cat.html).

## **Step 0**

- Run `npm init` to create a node project inside the project folder
- Create a git repository in your project folder
- Add **_node_modules_** to a **_.gitignore_** file

## **Step 1**

In **_step1.js_**, write a function, **_cat_**.

It should take one argument, **_path_**, and it should read the file with that path, and print the contents of that file.

Then, write some code that calls that function, allowing you to specify the path argument via the command line. For example:

```bash
$node step1.js one.txt
This is file one.

```

If you give it the path of a non-existent file, it should print that error and halt the script execution:

```bash
$node step1.js huh.txt
Error reading huh.txt:
  Error: ENOENT: no such file or directory, open 'huh.txt'

```

## **Step 2**

Copy over your **_step1.js_** code to **_step2.js_**

Add a new function, **_webCat_**. This should take a URL and, using [axios](https://github.com/axios/axios#installing), should read the content of that URL and print it to the console.

Modify the code that invoked **_cat_** so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either **_cat_** or **_webCat_**, respectively.

```bash
$node step2.js one.txt
This is file one.

$node step2.js http://google.com
<!doctype html><html ...

```

If there is an error getting the page, it should print that.

```bash
$node step2.js http://rithmschool.com/no-such-path
Error fetchinghttp://rithmschool.com/no-such-path:
  Error: Request failed with status code 404

```

## **Step 3**

Copy over your **_step2.js_** code to **_step3.js_**.

Add a feature where, on the command line, you can *optionally* provide an argument to output to a file instead of printing to the console. The argument should look like this: `--out output-filename.txt readfile-or-url`.

Current features should still work the same:

```bash
$node step3.js one.txt
This is file one.

$node step3.js http://google.com
<!doctype html><html ...

```

However, if `--out` follows your script name, it should take the next argument and use that as the path to write to.

For example:

```bash
$node step3.js --out new.txt one.txt
$# no output, but new.txt contains contents of one.txt

$node step3.js --out new.txt  http://google.com
$# no output, but new.txt contains google's HTML
```

Make sure you handle errors trying to write to the file:

```bash
$node step3.js --out /no/dir/new.txt one.txt
Couldn't write /no/dir/new.txt:
  Error: ENOENT: no such file or directory, open '/no/dir/new.txt'

```

**It may be the case at this point that you have functions like this:**

```jsx
**function** cat(path) { }

**function** catWrite(path, filename) { }

**function** webCat(url) { }

**function** webCatWrite(path, filename) { }
```

**If so, you probably have a lot of duplicated code among these functions. Try to structure your code so that:**

- your functions are small, could be tested, and do one thing
- you minimize duplication of code throughout

## **Further Study**

- Enhance your script so you can pass any number of arguments on the command line and it would output all of those files/URLs in sequence.

## **Solution**

[View our solution](https://curric.springboard.com/software-engineering-career-track/default/exercises/node-files/solution/index.html)
