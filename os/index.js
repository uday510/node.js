const dns = require('dns');
const { Resolver } = require('dns').promises;
const resolver = new Resolver();

/**
 * Resolves a domain (e.g. 'iana.org') into an IP address.
 */
dns.lookup('iana.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
});


/**
 * Resolves a domain (e.g. 'iana.org') into an array of IP addresses.
 *
 */
dns.resolve4('iana.org', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});


// set cloudflare as the DNS server
resolver.setServers(['1.1.1.1']);

/**
 * Resolves a domain (e.g. 'example.com') into an IP address.
 */
resolver.resolve4('example.com').then((addresses) => {
    console.log('addresses:', addresses);
});