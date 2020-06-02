import React from 'react';
import './links.css';

class Links extends React.Component {
    constructor(props) {
        super(props);
        this.showCreators = this.showCreators.bind(this);
    }

    showCreators () {
        let list = document.getElementById('creators-list');
        if (list.className.includes('creators-ul-show')) {
            list.classList.remove('creators-ul-show');
        } else {
            list.classList.add('creators-ul-show');
        }
    }

    render() {
        return (
        <>
            <div className='developers'>
                <button className='creators' onClick={() => this.showCreators()}>Developers</button>
                <ul id='creators-list' className='creators-ul'>
                    <li className='creators-name' key={'cb'}>Connor Brabant
                        <ul className='individual-ul'>
                            <li key={'cb-1'}>
                                <a target="_blank" className='personal-links' href='https://github.com/ConnorBrabant'>Github</a>
                            </li>
                            <li key={'cb-2'}>
                                    <a target="_blank" className='personal-links' href='https://www.linkedin.com/in/connor-brabant-81b1a1168/'>LinkedIn</a>
                            </li>
                            <li key={'cb-3'}>
                                    <a target="_blank" className='personal-links' href='https://angel.co/u/connor-brabant'>Angellist</a>
                            </li>
                            <li key={'cb-4'}>
                                <a target="_blank" className='personal-links' href='connorbrabant.github.io'>Personal</a>
                            </li>
                        </ul>
                    </li>
                    <li className='creators-name' key={'dw'}>Dylan Wong
                        <ul className='individual-ul'>
                            <li key={'dw-1'}>
                                    <a target="_blank" className='personal-links' href='https://github.com/dylanpwong'>Github</a>
                            </li>
                            <li key={'dw-2'}>
                                    <a target="_blank" className='personal-links' href='https://www.linkedin.com/in/dylan-wong-857139127/'>LinkedIn</a>
                            </li>
                            <li key={'dw-3'}>
                                    <a target="_blank" className='personal-links' href='https://angel.co/u/dylan-patrick-wong'>Angellist</a>
                            </li>
                            <li key={'dw-4'}>
                                    <a target="_blank" className='personal-links' href='https://dylanpwong.github.io/'>Personal</a>
                            </li>
                        </ul>
                    </li>
                    <li className='creators-name' key={'in'}>Isaac Nam
                        <ul className='individual-ul'>
                            <li key={'in-1'}>
                                <a target="_blank" className='personal-links' href='https://github.com/DunderProto'>Github</a>
                            </li>
                            <li key={'in-2'}>
                                <a target="_blank" className='personal-links' href='https://www.linkedin.com/in/isaac-nam-823180133/'>LinkedIn</a>
                            </li>
                            <li key={'in-3'}>
                                <a target="_blank" className='personal-links' href='https://angel.co/u/isaac-nam'>Angellist</a>
                            </li>
                            <li key={'in-4'}>
                                <a target="_blank" className='personal-links' href='https://dunderproto.github.io/'>Personal</a>
                            </li>
                        </ul>
                    </li>
                    <li className='creators-name' key={'bn'}>Brian Nguyen
                        <ul className='individual-ul'>
                            <li key={'bn-1'}>
                                <a target="_blank" className='personal-links' href='https://github.com/briannguyen4'>Github</a>
                            </li>
                            <li key={'bn-2'}>
                                <a target="_blank" className='personal-links' href='https://www.linkedin.com/in/brian-nguyen-1293bb148/'>LinkedIn</a>
                            </li>
                            <li key={'bn-3'}>
                                    <a target="_blank" className='personal-links' href='https://angel.co/u/brian-nguyen-55'>Angellist</a>
                            </li>
                            <li key={'bn-4'}>
                                <a target="_blank" className='personal-links' href='https://briannguyen4.github.io/'>Personal</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
    }
}

export default Links;