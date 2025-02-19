# https://www.openpolicyagent.org/docs/latest/policy-language/#example-data

package policy

sites := [
    {
        "region": "east",
        "name": "prod",
        "servers": [
            {
                "name": "web-0",
                "hostname": "hydrogen"
            },
            {
                "name": "web-1",
                "hostname": "helium"
            },
            {
                "name": "db-0",
                "hostname": "lithium"
            }
        ]
    },
    {
        "region": "west",
        "name": "smoke",
        "servers": [
            {
                "name": "web-1000",
                "hostname": "beryllium"
            },
            {
                "name": "web-1001",
                "hostname": "boron"
            },
            {
                "name": "db-1000",
                "hostname": "carbon"
            }
        ]
    },
    {
        "region": "west",
        "name": "dev",
        "servers": [
            {
                "name": "web-dev",
                "hostname": "nitrogen"
            },
            {
                "name": "db-dev",
                "hostname": "oxygen"
            }
        ]
    }
]

apps := [
    {
        "name": "web",
        "servers": ["web-0", "web-1", "web-1000", "web-1001", "web-dev"]
    },
    {
        "name": "mysql",
        "servers": ["db-0", "db-1000"]
    },
    {
        "name": "mongodb",
        "servers": ["db-dev"]
    }
]

containers := [
    {
        "image": "redis",
        "ipaddress": "10.0.0.1",
        "name": "big_stallman"
    },
    {
        "image": "nginx",
        "ipaddress": "10.0.0.2",
        "name": "cranky_euclid"
    }
]
