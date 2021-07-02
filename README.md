## Connect
It is a command and control python project.

### Features
* [x] Modular implants. (Implants are extensible through loading functions during run time from discoverable files)
* [x] Randomized response data. (Invalid requests will prompt randomized response data)
* [x] Variable and function indentifer randomization. (Staged files implent randomized identifiers to avoid being signatured)

### ToDo
* [ ] Fix the Base64 encoding from getting caught by Anti-Virus.
* [ ] Develop the JScript stager to respond with results of the eval'd jscript.
* [ ] Display results from stagers.
* [ ] Load dependency objects for functions into the implant if needed (e.g., list_dir would need a FS object)
* [ ] Keep track of loaded dependency objects for JScript stagers.
* [ ] Multiple staged files. (Currently only JScript)

### Documentation
```
Connection:
  A requested staged file.
  - status: current status of the connection with two possible values (sucessfully and pending).
    - pending (staged file requested waiting for first check in)
    - successfull (a successfully executed implant)
  - stager_format: file format of the staged file delivered (e.g., jscript).

Stager:
  Payloads hosted via an operator defined Flask webserver waiting to be requested and executed.

Return Codes:
  Negative (-1, -2, -3 ect..): Exit.
  0: Impeccable execution.
  1: Invalid command.
```

### Using Connect
```sh
./run_connect --ip 127.0.0.1 --port 1337
connect~# pwn pwn pwn
connect~# help

Options
=======

'?': Displays the help menu.
'exit': Exits the current command line.
'help': Displays the help menu.
'verbosity': Toggle verbosity mode on and off.
'version': Display the current application version.

Engine Options
==============

'connections': Displays current connections.
'stagers': Displays staged files ready for delivery.

connect~#
```

### Shoutouts
Thanks to [@Kevin J Clark](https://twitter.com/GuhnooPlusLinux) for all the assitance and inspiration from his sub-par but equally as functional C2... [Badrats](https://gitlab.com/KevinJClark/badrats). (:
