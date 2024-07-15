import { CopyOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { card, leftContainer, contents, rightContainer, buttons } from './DetailView.css.ts';

const DetailView = () => {
  return(
    <div className={card}>
      <div className={leftContainer}>
        <div>2024-07-07</div>
        <div className={contents}>
          <div>컴포즈 아메리카노</div>
          <div>카페</div>
        </div>
        <div>2000 월</div>
      </div>

      <div className={rightContainer}>
        <button className={buttons}><CopyOutlined /></button>
        <button className={buttons}><FormOutlined /></button>
        <button className={buttons}><DeleteOutlined /></button>
      </div>
    </div>
  );
}

export default DetailView;