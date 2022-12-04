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

8.  a greedy match finds the longest possible part of a string that fits the regex 
    pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
9.  the caret character (^) inside a character set to create a negated character set in
    the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.