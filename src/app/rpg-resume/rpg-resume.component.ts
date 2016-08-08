import { Component } from '@angular/core';

@Component({
    selector: 'rpg-resume',
    styles: [],
    template: `
    <title-card 
        name="Hunter Hunnie Thomas"
        email="scrapcupcake@gmail.com"
        phone="503-516-2831"
        note="Please use email as the primary countact; phone calls available by appointment" 
    ></title-card>
    <bio-card>
    <p>Hello, I’m Hunter Hunnie Thomas, a transgender/non-binary person. I’m currently homeless and trying to get back to my roots of my working career, retail and website development, to get back on my feet.</p>

    <p>I’m currently trying to figure out how to get the ergonomics of my disability and computer use to mesh well again, and looking for retail work to fill the time when I can’t be hunched over a laptop to be a good salesperson for stuff I believe in again.</p>

    <p>And I believe in cannabis. It has been the most effective pain and trauma relief in my life for a long time, and I’m a levelheaded advocate for its proper legal use. If you are interested in hiring a motivated, friendly professional who can grow with your company, I’m your queer!</p>
    </bio-card>

    <skill-card title="Primary Professional Qualifications">
    <skill name="Aspiring cannasommelier." level="3">
    Knowledgeable cannabis user with a taste for learning. I will be an advocate for matching each user with the appropriate application of the varied products available, from the wide array of edibles to concentrates and flower, finding the right strain, sativa, indica or the right hybrid for what a customer needs, as well as the many methods of inhaling, imbibing, or eating.
    </skill>
    <skill name="A Nerd’s eye for organization." level="3">
    My career as a QA professional and software developer, and my profound respect for the libraries and librarians I have relied on all my life, have left me with a deep desire to see everything in its place so everyone can easily find exactly what they need. I will be happy to develop useful and accessible displays and storage both online and off for all your products. For an example of what I’d love to work on, see <a href="https://www.youtube.com/watch?v=l9AqYaSRjw0">Adam Savage’s workshop organization project</a>; that’s the level of ‘right at hand’ I want everyone to have, wherever I work.
    </skill>
    <skill name="Helpful and courteous sales person." level="4">
    I’ve worked front desk at service businesses and worked the floor in retail previously, and successfully pitched ideas for startup companies to investors. I’ve had experience dealing with irate, frustrated and confused customers, and have been able to come to terms with all of them.
    </skill>
    <skill name="Extensive website development skills." level="4">
    I’ve been working on websites for twenty years. I’m in the midst of updating my skills to the latest the web has to offer; I’m a skilled angular developer and currently developing (including this site) in Angular 2. I’m happy to put that to work for your store, help you develop a one of a kind website experience for your store.
    </skill>
    <skill name="Computer networking expert." level="4">
    I can’t fix every computer issue, but I can keep machines talking to each other. If you are looking at expanding your operation to more than one store, I can help. 
    </skill>
    </skill-card>
    <skill-card title="Additional skills, a whole career to draw skill from">
    <skill name="14 Years Quality Assurance Experience" level="5">
    Development of QA processes in software development startups, redevelopment of QA processes inside multiple corporate environments. Team lead in multiple organizations, including  project management and process documentation as well as technical leadership and training. Extensive experience with work in a heterogeneous web development environment.
    </skill>
    <skill name="22 Years Software Development Experience" level="5">
    Web Development (client and server, javascript and ruby), Test Automation (unit, integration, end-to-end, javascript and ruby), Game Development (Unity, C#). Current focus: Angular2 clients, Node.js/Express.js or servers, Firebase as a backend for rapid prototyping.
    </skill>
    </skill-card>

    <employment-card title="Modern Era">
    
        <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
        </employment-card>
        <employment-card title="Startup Era">
        <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
            
            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
    </employment-card>
    <employment-card title="QA Career Era">
        <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
            
            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
    </employment-card>
    
    <employment-card title="Front Desk & Retail Era">
            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>

            <employment job-title=""
            start-date="" end-date="" 
            employer="" location="">
            Description here
            </employment>
    </employment-card>
    
    <employment-card title="Collage Era">
        <employment job-title=""
        start-date="" end-date="" 
        employer="" location="">
        Description here
        </employment>
    </employment-card>
    `
})
export class RpgResume{

}