type ICharacter = { 
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: object,
    location: object
    image: string,
    episode: string[],
    url: string,
    created: string
};

type IEpisode = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: any,
    url: string,
    created: string
}

const baseURL = 'https://rickandmortyapi.com/api';

async function request<TResponse>(
    url: string,
    config: RequestInit = {}
  ): Promise<TResponse> {
    const response = await fetch(url, config);
    const data = await response.json();
    return data as TResponse;
}

// Api
(async () => {
    try {
        const { results } : {results : IEpisode[]}  = await request(baseURL+'/episode');
        for (let index = 0; index < results.length; index++) {
            const formatedArray = [];
            const parsedIds = [];
            for (let x = 0; x < results[index].characters.length; x++) {
                const regString = baseURL+'/character/';
                const id = results[index].characters[x].substring(regString.length);
                parsedIds.push(Number(id));
                const multipleCharacters = await request<ICharacter[]>(baseURL+'/character/'+ parsedIds);
                formatedArray.push(multipleCharacters);
            }
            if(formatedArray.length > 0){
                results[index].characters = formatedArray;
            }
            
        }
        console.log('results', results);
    } catch (error) {
       console.log(error)
    }
  })();

//Counter Function
export function counter(value:number=0){
    function setCurrentValue(): number{
      return value;
    }
    function incrementValue() : void{
        value++;
    }
    return [setCurrentValue, incrementValue];
} 

const [getA, nextA] = counter(1);

getA();
nextA();
getA();

const [getB, nextB] = counter(10);

nextB();
getA();
getB();

nextA();
getA();
getB();

//Services Interaction

1. RESTful  API,  Message broker, RPC / gRPC
2 

RESTful  API

  pros
    -The greater data flexibility is made possible because data is not tied to any resources or methods. 
      Rest is thus able to work with different types of calls and return different data formats. 
      It can even change structurally with accurate implementation of hypermedia.
    
    - Many developers also choose to utilize the Rest API because of its scalability potential. 
      This is made possible by the separation between the client and server. 
      Rest operates on the concept that the client and server should be separate so that they can evolve on their own. 
      This allows the development team to scale the product with relative ease.

    - Their stateless nature makes Rest APIs unique. 
      Stateless in this respect means that none of the previous requests or responses are saved by the server. 
      Every message is isolated so it's necessary for all of the data to be sent with the request. 
      This makes every request more understandable and purposeful.

    -  Developers use the same standards and that means every API has the same uniform interface. 
       The Rest API from one application can thus communicate in exactly the same manner with a completely different application, allowing for more efficient communication.

  cons   
    
   - Rest APIs are by and large bound by six architectural constraints which include the uniform interface, the client-server based nature, stateless operations, layered system architecture, etc. 
    It’s important to understand that these constraints exist before building out your API.

   - Developers who aren't highly skilled might find themselves going through a steep learning curve when developing a Rest API. 
     If they don't understand the limits of this web technology they could end up in situations where they get frustrated with its limitation.

   - Rest doesn't impose any security protocols. This means that it's not the ideal technology if the service requires confidential data to be passed between the client and server. 
    On the other hand, it's better suited to publicly available services.


    cases 
        to expose data to public (Public API)
        system that does not have architectures
        authentication servers
        Mobile  Apps
        
Message broker

  pros 

    - Regardless of whether or not the consumer is active, the producer can send messages. 
    It only requires a message broker to be operational. 
    The consumer is no exception.

    - Message Brokers added asynchronous processing which improved system performance. 
    Tasks that require a lot of time can be divided into different processes. 
    This will improve the user experience by speeding up your application.

    - Message Brokers boost reliability by ensuring the transmission of messages. 
    Message brokers provide a mechanism for redelivery. 
    In the event of a consumer failure, the message can be re-delivered immediately or after a predetermined period of time. 
    It also allows for the routing of undeliverable messages, known as a dead-letter mechanism.

  cons 

    - Adding a message broker to a system adds a new component to your overall system architecture. 
    As a result, there are additional considerations to be made, such as network maintenance between components or security concerns. 
    In addition, a new issue with eventual consistency arises. 
    Until the messages are propagated and processed, some components may not have up-to-date data.

    - Assume you have multiple async stages of processing a single request using the message broker. 
    You sent something but did not receive a response. Finding the root cause of a failure can be difficult because each service has its own logs. 
    Along with implementing systems that use messages, keep in mind to include some message tracing capabilities.


  cases 
      E-commerce order processing and fulfillment
      Financial transactions and payment processing
      Protecting highly sensitive data at rest and in transit
      Sending Emails

gRPC  

  pros

    - By different evaluations, gRPC offers up to 10x faster performance and API-security than REST+JSON communication as it uses Protobuf and HTTP/2. 
        Protobuf serializes the messages on the server and client sides quickly, resulting in small and compact message payloads. 
        HTTP/2 scales up the performance ranking via server push, multiplexing, and header compression. 
        Server push enables HTTP/2 to push content from server to client before getting requested, while multiplexing eliminates head-of-line blocking.
         HTTP/2 uses a more advanced compression method to make the messages smaller, resulting in faster loading. 

    - gRPC supports client- or server-side streaming semantics, which are already incorporated in the service definition. 
        This makes it much simpler to build streaming services or clients.

  
    -  The prime feature of gRPC methodology is the native code generation for client/server applications. 
        gRPC frameworks use protoc compiler to generate code from the .proto file. 
        Code generation is used in command of the Protobuf format for defining both message formats and service endpoints. 
        It can produce server-side skeletons and client-side network stubs, which saves significant development time in applications with various services


    - gRPC tools and libraries are designed to work with multiple platforms and programming languages, including Java, JavaScript, Ruby, Python, Go, Dart, Objective-C, C#, and more. 
       Due to the Protobuf binary wire format and efficient code generation for virtually all platforms, programmers can develop performant applications while still using full cross-platform support.


    - The use of HTTP/2 over the TLS end-to-end encryption connection in gRPC ensures API security. 
       gRPC encourages the use of SSL/TLS to authenticate and encrypts data exchanged between the client and server.


    - As gRPC is an all-in-one RPC solution, it works seamlessly across various languages and platforms. 
       Additionally, it features excellent tooling, with much of the required boilerplate code generated automatically. 
       This saves considerable time and enables developers to focus more on business logic.

  cons

    - As gRPC heavily uses HTTP/2, it is impossible to call a gRPC service from a web browser directly. 
      No modern browser provides the control needed over web requests to support a gRPC client. 
     Therefore, a proxy layer and gRPC-web are required to perform conversions between HTTP/1.1 and HTTP/2.
    
    - Protobuf compresses gRPC messages into a non-human readable format. 
      This compiler needs the message’s interface description in the file to deserialize correctly. 
     So, developers need additional tools like the gRPC command-line tool to analyze Protobuf payloads on the wire, write manual requests, and perform debugging.
    
    - While HTTP supports mediators for edge caching, gRPC calls use the POST method, which is a threat to API-security. 
      The responses can’t be cached through intermediaries. 
      Moreover, the gRPC specification doesn’t make any provisions and even indicates the wish for cache semantics between server and client.
    
    - Many teams find gRPC challenging to learn, get familiar with Protobuf, and look for tools to deal with HTTP/2 friction. 
      It is a common reason why users prefer to rely on REST for as long as possible.

    
 cases

    Real-time communication services (Chat, Message)
    When efficient communication is a goal
    In multi-language environments
    For internal APIs where we don’t have to force technology choices on clients

    