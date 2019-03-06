var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var user1="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var user2="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var user3="0xa44a08d3f6933c69212114bb66e2df1813651844";
var user4="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var user5="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
var user6="0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec";
var feeAccount="0xa88a05d2b88283ce84c8325760b72a64591279a2";
var uiFeeAccount="0xa99a0ae3354c06b1459fd441a32a3f71005d7da0";
rbtLibAbi=[{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"key","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"key","type":"uint256"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
rbtLibBin="0x610d24610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061005c577c01000000000000000000000000000000000000000000000000000000006000350463d1612f0f8114610061578063ef0881fe14610093575b600080fd5b81801561006d57600080fd5b506100916004803603604081101561008457600080fd5b50803590602001356100c3565b005b81801561009f57600080fd5b50610091600480360360408110156100b657600080fd5b50803590602001356102f5565b8015156100cf57600080fd5b6100d98282610413565b15156100e457600080fd5b600081815260018084016020526040822001548190158061011657506000838152600185016020526040902060020154155b1561012257508161016a565b5060008281526001840160205260409020600201545b60008181526001808601602052604090912001541561016a576000908152600180850160205260409091200154610138565b60008181526001808601602052604090912001541561019e57600081815260018086016020526040909120015491506101b5565b600081815260018501602052604090206002015491505b6000818152600185016020526040808220548483529120819055801561022757600081815260018087016020526040909120015482141561020b5760008181526001808701602052604090912001839055610222565b600081815260018601602052604090206002018390555b61022b565b8285555b600082815260018601602052604090206003015460ff16158483146102b557610255868487610444565b60008581526001878101602052604080832080830154878552828520938401819055845281842087905560028082015490840181905584529083208690556003908101549286905201805460ff191660ff90921615159190911790559193915b80156102c5576102c586856104bd565b5050600090815260019384016020526040812081815593840181905560028401555050600301805460ff19169055565b80151561030157600080fd5b61030b8282610413565b1561031557600080fd5b81546000905b801561035f578091508083101561034557600090815260018085016020526040909120015461035a565b60009081526001840160205260409020600201545b61031b565b60408051608081018252838152600060208083018281528385018381526001606086018181528a86528b82019094529590932093518455519383019390935551600282015590516003909101805460ff19169115159190911790558115156103c957828455610403565b818310156103ec5760008281526001808601602052604090912001839055610403565b600082815260018501602052604090206002018390555b61040d84846108dc565b50505050565b6000811580159061043d5750825482148061043d5750600082815260018401602052604090205415155b9392505050565b600081815260018401602052604080822054848352912081905580151561046d5782845561040d565b60008181526001808601602052604090912001548214156104a3576000818152600180860160205260409091200183905561040d565b600090815260019390930160205250604090912060020155565b60005b825482148015906104e55750600082815260018401602052604090206003015460ff16155b156108bd5760008281526001808501602052604080832054808452922001548314156106e45760008181526001850160205260408082206002015480835291206003015490925060ff1615610589576000828152600180860160205260408083206003908101805460ff199081169091558585529190932090920180549092161790556105728482610b47565b600081815260018501602052604090206002015491505b60008281526001808601602052604080832090910154825290206003015460ff161580156105d45750600082815260018501602052604080822060020154825290206003015460ff16155b1561060157600082815260018581016020526040909120600301805460ff191690911790559150816106df565b600082815260018501602052604080822060020154825290206003015460ff161515610680576000828152600180860160205260408083208083015484529083206003908101805460ff19908116909155938690520180549092161790556106698483610c21565b600081815260018501602052604090206002015491505b600081815260018501602052604080822060039081018054868552838520808401805460ff909316151560ff1993841617905582548216909255600290910154845291909220909101805490911690556106da8482610b47565b835492505b6108b7565b6000818152600180860160205260408083209091015480835291206003015490925060ff1615610763576000828152600180860160205260408083206003908101805460ff1990811690915585855291909320909201805490921617905561074c8482610c21565b600081815260018086016020526040909120015491505b600082815260018501602052604080822060020154825290206003015460ff161580156107ae575060008281526001808601602052604080832090910154825290206003015460ff16155b156107db57600082815260018581016020526040909120600301805460ff191690911790559150816108b7565b60008281526001808601602052604080832090910154825290206003015460ff16151561085c57600082815260018086016020526040808320600281015484529083206003908101805460ff19908116909155938690520180549092161790556108458483610b47565b600081815260018086016020526040909120015491505b60008181526001808601602052604080832060039081018054878652838620808401805460ff909316151560ff199384161790558254821690925593015484529220909101805490911690556108b28482610c21565b835492505b506104c0565b506000908152600190910160205260409020600301805460ff19169055565b60005b825482148015906109095750600082815260018401602052604080822054825290206003015460ff165b15610b25576000828152600180850160205260408083205480845281842054845292200154811415610a2c5760008181526001850160205260408082205482528082206002015480835291206003015490925060ff16156109b2576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250610a27565b60008181526001850160205260409020600201548314156109da578092506109da8484610b47565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254610a27908590610c21565b610b1f565b6000818152600180860160205260408083205483528083209091015480835291206003015490925060ff1615610aaa576000818152600180860160205260408083206003808201805460ff19908116909155878652838620820180548216905582548652928520018054909216909217905590829052549250610b1f565b6000818152600180860160205260409091200154831415610ad257809250610ad28484610c21565b50600082815260018085016020526040808320548084528184206003808201805460ff19908116909155825487529386200180549093169093179091559182905254610b1f908590610b47565b506108df565b505080546000908152600190910160205260409020600301805460ff19169055565b600081815260018084016020526040808320600281018054915482865292852090930154938590529183905590918015610b8f57600081815260018601602052604090208490555b60008381526001860160205260409020829055811515610bb157828555610bfe565b6000828152600180870160205260409091200154841415610be75760008281526001808701602052604090912001839055610bfe565b600082815260018601602052604090206002018390555b505060008181526001938401602052604080822090940183905591825291902055565b60008181526001808401602052604080832091820180549254838552918420600201549385905283905590918015610c6757600081815260018601602052604090208490555b60008381526001860160205260409020829055811515610c8957828555610cd6565b6000828152600186016020526040902060020154841415610cbf5760008281526001860160205260409020600201839055610cd6565b600082815260018087016020526040909120018390555b505060008181526001909301602052604080842060020183905591835291205556fea165627a7a723058207d2bab92fe3a43f7fc5406eed14dda3e1faabda612264d98d928dcd61582202c0029"
var rbtLibAddress="0x90d8927407c79c4a28ee879b821c76fc9bcc2688";
var rbtLibAbi=[{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"key","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"key","type":"uint256"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var rbtLib=eth.contract(rbtLibAbi).at(rbtLibAddress);
