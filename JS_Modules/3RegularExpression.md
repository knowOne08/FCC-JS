## Regular Expression
1.  test() method. Case sensitive.
2.  Match a Literal String with Different Possibilities using or [|] operator.
3.  ignore case [i] flag in .test() method to ignore the case differences.
4.  You can also extract the actual matches you found with the .match() method.The
    syntax of .match() is reverse of .test() method.
            ```
            'string'.match(/regex/);
            /regex/.test('string');
            ```
5.  To a search a pattern more than once the flag (g) global is used.
6.  The wildcard character [.] will match any one character., if you wanted to match 
    hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
7.  Character classes allow you to define a group of characters you wish to match by    
    placing them inside square ([ and ]) brackets. [abc], [a-d](a to d).
    
    To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
    
    [+]character: /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

    [*]character: would match all the remaing characters followed by a specific character.

    [?]character: "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
    
    [?]This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

    [$]character: You can search the end of strings using the dollar sign character $ at the end of the regex.  

8.  a greedy match finds the longest possible part of a string that fits the regex 
    pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
9.  the caret character (^) inside a character set to create a negated character set in
    the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
10. [\w] shortcut is equal to [A-Za-z0-9_]. This character class matches upper and 
    lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
    
    [\W] oppsite of [\w] it will ommit the alphanumerics. 

    [\d] for digits and [\D] for non-digits.

    [\s] White Space, carriage return, tab, form feed, and new line characters. [\S] opposite of white Space.
    
    [()] To check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
11. to match only the letter a appearing between 3 and 5 times in the string ah, your 
    regex would be /a{3,5}h/.
    
    {3} represents only three times {3,} atleast 3 times and {,3} atmost 3 times.

12. Lookaheads
    
    A positive lookahead will look to make sure the element in the search pattern is 
    there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
    
    On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
13. The inputs for .replace() is first the regex pattern you 
    want to search for. The second parameter is the string to replace the match or a function to do something. 