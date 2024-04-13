import Image from "next/image";
import blogMainImage from "@/public/block-chain-banking.jpg";
import linkedin from "@/public/linkedin.svg";
import author from "@/public/blog-author.png";
import AuthorBlock from "@/app/ui/blogs/author-block";
import TableOfContent from "@/app/ui/blogs/table-of-content";
import Category from "@/app/ui/blogs/categories";

export const metadata = {
  title: "How blockchain redefines business and banking",
  description: "...",
};

export default function SampleBlog() {
  return (
    <main className="blog-page-content">
      <div className="breadcrump">
        PERPECTIVE <span></span> <span>BLOCK CHAIN</span>
      </div>
      <h1
        data-option="strip-slide-up"
        className="blog-page-title animate strip-slide-up strip-slide-black">
        How blockchain redefines business and banking
      </h1>
      <div className="blog-page-main-image">
        <Image src={blogMainImage} alt="" />
      </div>
      <div className="blog-page-main-content-container">
        <div className="blog-page-side-content-bar">
          <AuthorBlock />
          <Category />
        </div>
        <div className="blog-page-main-content">
          <h2>Summary</h2>
          <p>
            More than a decade has passed since the mysterious peer group (or
            individual) called Satoshi Nakamoto first promulgated the concept of
            Blockchain. The literal term changed from ‘Blockchain’ to
            ‘Blockchain,’ not just to please the netizens but to emphasize the
            unalterable nature of the blocks, a feature that brings a sense of
            security to the financial moguls, or at least those who aspire to be
            one.
          </p>
          <TableOfContent />
          <p>
            Initially considered a sort of payment rail, which serves as a
            single-channel secure payment network/gateway – from payer to payee,
            its applicability has now widened to a great extent.
          </p>
          <h2>Blockchain - Technology that Fuels Bitcoin</h2>
          <p>
            Blockchain fuels the most revered and accepted cryptocurrency,
            Bitcoin, making it the most eloquent and sought-after digital
            currency. It is the source for the protected/unaltered encryptions
            that make the currency's generation, transfer, and acceptance
            possible. The person using it can operate independently, free from
            the constraints of central or state banks, a notion that instills a
            sense of freedom.
          </p>
          <p>
            Simply put, Blockchain is akin to a German-engineered car that can
            be used to drive off to far-off places, while you have to ignore
            real-life terms such as import and export. What it propels is
            essentially called Bitcoin. It is like a paper-drawn impression
            (Blockchain) implemented (Bitcoin) by people with access to it.
            Also, since Bitcoin does not need acceptance, forbearance, or
            ceremonial baton-carrying theatrics, it is not prerogative.
          </p>
          <h2>
            Whims and Fancies – Global Acceptance that Pushed a Digital
            Revolution
          </h2>
          <p>
            People are subjective. They can manipulate, corrupt, and fiddle with
            the market moods. Thus, the banks, which the people run, can have
            their share of depravity. Also, banks charge money for transactions.
            Moreover, as a commoner, you have to trust them. They make it look
            that way with the sophisticated infrastructure, soft-spoken
            employees, and whatnot. Furthermore, since it is people-operated,
            money, a real-time commodity, can be robbed or siphoned - all you
            need is the password for the bank account. These drawbacks of
            traditional banking systems highlight the need for alternatives like
            Blockchain and Bitcoin.
          </p>
          <p>
            Bitcoin, which features a distributed ledger, hash encryption, and
            proper validation, has become infinitely secure. Thus, the real-life
            banking issue mentioned above can be easily solved by Bitcoin,
            technically known as Blockchain Implementation. It provides a
            convenient and safe platform or gateway where Bitcoin conquers the
            snags of traditional banking.
          </p>
          <h2>Practical or Most-sought Usage of Blockchain – Bitcoin Mining</h2>
          <p>
            Blockchain is an open but encrypted ledger database, meaning a block
            is the live chunk of the blockchain, where the last transaction is
            recorded. Here is an elucidated applicability of Blockchain, i.e.,
            Bitcoin.
          </p>
          <ul>
            <li>
              <h3>It Starts with Ledger</h3>
              <p>
                It all starts with a ledger, a digital file, a transactional
                copy, or a principal book – as a random banking bod would say.
                Every connected person has/receives a copy of the ledger online.
                Now, the best thing, which is Blockchain’s USP, happens here.
                Blockchain, a distributed (or virtual) database, piles the
                transaction copy. And since everyone has their ledger, the need
                for a centralized copy is useless. The central theme of
                no-centralization is simple – no one has the authority,
                technical capability, and means to alter the ledger because the
                ledger owned by another person will be flagged.
              </p>
            </li>
            <li>
              <h3>
                Hash Encryption: Like that of the Fort Knox, but an Invisible
                One!
              </h3>
              <p>
                Blockchain is encrypted as it operates on a cryptographic
                protocol. It’s like an artificial zoo. You can see everything
                but cannot touch the felines. You can view the transactions, but
                no one knows about the account’s owner, etc. - something the
                banking system should imitate.
              </p>
            </li>
            <li>
              <h3>Proof of Work: Everyday Chore of Gifted Miners</h3>
              <p>
                Bitcoin experts specializing in mining Bitcoins often validate
                transactions through mathematical problems known by the masses
                as Proof of Work. Each block has a hash target or target hash, a
                number that necessitates the hashed block header to be less than
                or equal to award a new block.
              </p>
              <p>
                The Bitcoin miners aggregate a series of unconfirmed
                transactions, calculate the hashes, and begin to find a specific
                set of characters called ‘Nonce.’ From the previous block's
                hash, the total hash obtained from the transaction data and the
                random number (nonce) must match the final pre-allocated target
                hash. Hence, only the gifted one can solve it!
              </p>
            </li>
            <li>
              <h3>Incentives for Validation: Only a Genius Can Crack!</h3>
              <p>
                Bitcoin mining involves specific users performing/executing
                crucial works to get hefty rewards, where the block receives
                12.5 BTC. Since each block requires an average time of 10
                minutes, a wunderkind bloke can earn millions.
              </p>
            </li>
          </ul>
          <h2>Navigate the complexity of Blockchain with Qcentrio</h2>
          <p>
            Blockchain analytics (and other applications) provide data
            integrity, security, a new approach to data monetization, data
            control, elimination of middlemen, fast auditing, unconstrained
            leverage to data, and more. Thus, it is inevitable that the demand
            for blockchain professionals will skyrocket in the future.
          </p>
          <div className="conclusion">
            <h2 data-option="up" className="animate animate-hidden">
              Conclusion
            </h2>
            <p data-option="up" className="animate animate-hidden">
              At Qcentrio, we provide end-to-end blockchain advisory and
              offerings per global standards. Talk to our experts.
            </p>
          </div>
          <div data-option="up" className="reach-out animate animate-hidden">
            <h2 className="heading">SOUNDS INTERESTING?</h2>
            <p>
              Reach out to <a>support@qcentrio.com</a> and discuss your
              situation with our experts.
            </p>
          </div>
          <div className="tags-container">
            <div className="tag">Cloud Migration</div>
            <div className="tag">Cloud Migration</div>
            <div className="tag">Cloud Migration</div>
          </div>
        </div>
      </div>
    </main>
  );
}
