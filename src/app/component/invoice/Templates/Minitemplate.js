import React from 'react';
import Template from './Template.module.css';
import './Mini.css'
function Minitemplate() {
  return (
    <>
      <div className={Template.Forms}>
        <div>
          <label htmlFor="uname">Select Person</label>
          <select type="text" placeholder="Enter Username" name="uname" className={Template.input} required>
            <option value="Select the person to whom you will send this">Select the person to whom you will send this</option>
          </select>
        </div>
        <div>
          <label htmlFor="uname">Invoice Number</label>
          <input type="text" placeholder="Enter Username" name="uname" className={Template.input} required />
        </div>
        <div>
          <label htmlFor="uname">Add a Treatment</label>
          <select type="text" placeholder="Enter Username" name="uname" className={Template.input} required>
            <option value="Select the person to whom you will send this">Select the person to whom you will send this</option>
          </select>
        </div>
        <div>
          <label htmlFor="uname">Select Date</label>
          <input type="text" placeholder="Enter Username" name="uname" className={Template.input} required />
        </div>

        <div className="CenterDiv">
          <div className="bgDiv">
            <div className="componentoftable">
              <div>
                <p>Template</p>
              </div>
              <div>
                <p>Amount</p>
              </div>
              <div>{/* <p>Someting</p>              */}</div>
            </div>
            <div className="hrline">
              <hr />
            </div>
            <div className="componentoftable1">
              <div>
                <p>Anti wrinkle treatment</p>
              </div>
              <div>
                <p>$1480</p>
              </div>
              <div >
                <button>Add</button>
                <button>Remove</button>
              </div>
            </div>

            <div className="componentoftable secondUi">
              <div>
                <p>Template</p>
              </div>
              <div>
                <p>Amount</p>
              </div>
              <div>
                <p>Someting</p>
              </div>
              <div>
                <p>Someting</p>
              </div>
            </div>
            <div className="hrline">
              <hr />
            </div>
            <div className="componentoftable1 textboxui">
              <div>
                <div className="textui">
                  <span>Hair Care Session</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>$145</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>8</span>
                </div>
              </div>
              <div>
                <div className="textui">$1160</div>
              </div>
              {/* <div> 
              <button>Add</button>             
              <button>Remove</button>             
            </div> */}
            </div>

            <div className="componentoftable1 textboxui2">
              <div>
                <button>Add</button>
                <button>Remove</button>
              </div>
            </div>

            <div className="componentoftable secondUi">
              <div>
                <p>Template</p>
              </div>
              <div>
                <p>Amount</p>
              </div>
              <div>
                <p>Someting</p>
              </div>
              <div>
                <p>Someting</p>
              </div>
            </div>
            <div className="hrline">
              <hr />
            </div>
            <div className="componentoftable1 textboxui">
              <div>
                <div className="textui">
                  <span>Hair Care Session</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>$145</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>8</span>
                </div>
              </div>
              <div>
                <div className="textui">$1160</div>
              </div>

            </div>
            <div className="componentoftable1 textboxui">
              <div>
                <div className="textui">
                  <span>Hair Care Session</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>$145</span>
                </div>
              </div>
              <div>
                <div className="textui">
                  <span>8</span>
                </div>
              </div>
              <div>
                <div className="textui">$1160</div>
              </div>

            </div>

            <div className="componentoftable1 textboxui2">
              <div>
                <button>Add</button>
                <button>Remove</button>
              </div>
            </div>


            <div className="bottomui">
              <div className="sidebarbottom">
                <span>Add Notes/ Terms</span>
                <div className="textuiSidebar"></div>
              </div>
              <div className="rightbarbottom">
                <div>
                  <span>Subtotal</span>
                  <span>$540.00</span>
                </div>
                <div>
                  <span>Transaction Fee 5%</span>
                  <span className="textlikeui">$00.00</span>
                </div>

                <div>
                  <span>Transaction Fee 5%</span>
                  <span className="textlikeui">$00.00</span>
                </div>

                <div>
                  <span>total</span>
                  <span >$540.00</span>
                </div>
              </div>

            </div>
          </div>
          {/* </div> */}
        </div>


      </div>
    </>
  )
}

export default Minitemplate;
