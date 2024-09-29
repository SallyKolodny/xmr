# Introduction and Scope

You may need to configure your Internet router to forward inbound traffic to your Monero Daemon that hosts 
the blockchain. You can maybe do this by logging into your router and configuring a rule. Alternatively,
if your router supports *upnp port forwarding* you can trigger it to create a port forwarding rule using
the `upnpc` utility. Note that not all routers support automatic upnp triggering. You may need to login
to your router and enable this feature.

# Identifying the Problem in your Monero Daemon Logfile

If you see a log message like the one below, then you can use the information on this page to solve the problem.

Sample log message:
```
2024-09-29 20:15:33.757 W No incoming connections - check firewalls/routers allow port 20080
```
In the above log message, the Monero Daemon has noted that port 20080 is not receiving any inbound data.

# Installing the upnpc Utility

On Debian based systems you can install the upnpc command using apt as shown below.
```
sudo apt install miniupnpc
```
# Triggering a Port Forwarding Rule on your Router

Use the upnpc command to get your router to forward inbound traffic to a particular machine and port number without having to configure your router. 

**NOTE:** You need to run this on the machine that will receive the packets. In the example below, you'll need to run the `upnpc` comand on 192.168.1.2.

```
upnpc -a 192.168.1.2 20080 20080 TCP
```

The example above forward traffic on port 20080 to 192.168.1.2
